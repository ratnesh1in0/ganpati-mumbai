import { useState, useEffect } from 'react';
import { MANDALS_DATA, Mandal, CrowdInfo } from '../data/mandalsData';

export interface DevoteeReportSubmission {
  mandalId: string;
  lineType: 'charan-sparsh' | 'mukh-darshan' | 'general';
  waitMinutes: number;
  crowdLevel: 'low' | 'moderate' | 'busy' | 'peak';
  notes?: string;
}

export function useLiveCrowd() {
  const [mandals, setMandals] = useState<Mandal[]>(() => {
    try {
      const stored = localStorage.getItem('mumbai_crowd_data');
      if (stored) {
        const parsedUpdates: Record<string, Partial<CrowdInfo>> = JSON.parse(stored);
        return MANDALS_DATA.map(m => {
          if (parsedUpdates[m.id]) {
            return {
              ...m,
              crowd: {
                ...m.crowd,
                ...parsedUpdates[m.id]
              }
            };
          }
          return m;
        });
      }
    } catch {
      // fallback
    }
    return MANDALS_DATA;
  });

  const submitCrowdReport = (report: DevoteeReportSubmission) => {
    setMandals(prev => {
      const updated = prev.map(m => {
        if (m.id === report.mandalId) {
          const isCharan = report.lineType === 'charan-sparsh';
          const isMukh = report.lineType === 'mukh-darshan';
          
          let statusText = 'Normal Flow';
          let statusTextMr = 'सामान्य गर्दी';
          if (report.crowdLevel === 'low') {
            statusText = `Low Queue (~${report.waitMinutes} min)`;
            statusTextMr = `कमी गर्दी (~${report.waitMinutes} मि.)`;
          } else if (report.crowdLevel === 'moderate') {
            statusText = `Moderate Line (~${report.waitMinutes} min)`;
            statusTextMr = `मध्यम गर्दी (~${report.waitMinutes} मि.)`;
          } else if (report.crowdLevel === 'busy') {
            statusText = `Busy (~${Math.round(report.waitMinutes / 60 * 10) / 10} hrs)`;
            statusTextMr = `गर्दी (~${Math.round(report.waitMinutes / 60 * 10) / 10} तास)`;
          } else {
            statusText = `Heavy Rush (~${Math.round(report.waitMinutes / 60 * 10) / 10} hrs)`;
            statusTextMr = `प्रचंड गर्दी (~${Math.round(report.waitMinutes / 60 * 10) / 10} तास)`;
          }

          const newCrowd: CrowdInfo = {
            ...m.crowd,
            status: report.crowdLevel,
            statusText,
            statusTextMr,
            charanSparshMinutes: isCharan ? report.waitMinutes : m.crowd.charanSparshMinutes,
            mukhDarshanMinutes: isMukh ? report.waitMinutes : m.crowd.mukhDarshanMinutes,
            generalWaitMinutes: report.waitMinutes,
            lastUpdated: "Just now",
            lastUpdatedMr: "आत्ताच",
            reportedCount: m.crowd.reportedCount + 1,
            trend: report.waitMinutes > m.crowd.generalWaitMinutes ? 'rising' : 'decreasing',
            notes: report.notes || m.crowd.notes,
            notesMr: report.notes || m.crowd.notesMr
          };

          return { ...m, crowd: newCrowd };
        }
        return m;
      });

      // Save override map to localStorage
      try {
        const overrides: Record<string, Partial<CrowdInfo>> = {};
        updated.forEach(item => {
          overrides[item.id] = item.crowd;
        });
        localStorage.setItem('mumbai_crowd_data', JSON.stringify(overrides));
      } catch {
        // storage quota
      }

      return updated;
    });
  };

  // Subtle ticker to refresh relative timestamps
  useEffect(() => {
    const timer = setInterval(() => {
      setMandals(prev => [...prev]);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return {
    mandals,
    submitCrowdReport
  };
}
