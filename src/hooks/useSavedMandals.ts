import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export function useSavedMandals() {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('mumbai_ganpati_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [visitedIds, setVisitedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('mumbai_ganpati_visited');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mumbai_ganpati_saved', JSON.stringify(savedIds));
    } catch {
      // storage quota or incognito mode
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('mumbai_ganpati_visited', JSON.stringify(visitedIds));
    } catch {
      // storage quota or incognito mode
    }
  }, [visitedIds]);

  const toggleSave = (id: string) => {
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleVisited = (id: string) => {
    setVisitedIds(prev => {
      const isNowVisited = !prev.includes(id);
      if (isNowVisited) {
        // Trigger celebratory marigold & gold confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#E2621B', '#F59E0B', '#E5A93C', '#F5EBE1']
        });
      }
      return isNowVisited ? [...prev, id] : prev.filter(item => item !== id);
    });
  };

  const isSaved = (id: string) => savedIds.includes(id);
  const isVisited = (id: string) => visitedIds.includes(id);

  return {
    savedIds,
    visitedIds,
    toggleSave,
    toggleVisited,
    isSaved,
    isVisited
  };
}
