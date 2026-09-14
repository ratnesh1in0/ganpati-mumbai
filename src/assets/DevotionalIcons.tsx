import React from 'react';

export const GanpatiGlyph: React.FC<{ className?: string; size?: number }> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M34 32C24 26 12 28 7 37c-5 9-2 22 6 28 6 5 14 5 21 1Z" fill="currentColor" opacity="0.65" />
    <path d="M66 32c10-6 22-4 27 5 5 9 2 22-6 28-6 5-14 5-21 1Z" fill="currentColor" opacity="0.65" />
    <circle cx="50" cy="8" r="3.6" fill="currentColor" />
    <path d="M50 13c7 0 12 4.5 14 11H36c2-6.5 7-11 14-11Z" fill="currentColor" />
    <rect x="33" y="24" width="34" height="5" rx="2.5" fill="currentColor" />
    <path d="M50 29c12 0 20 9 20 20v9c0 11-9 20-20 20s-20-9-20-20v-9c0-11 8-20 20-20Z" fill="currentColor" />
    <path d="M38 60c-.5 6 .3 10 2.4 12.6-2.8-.6-4.6-4-4.4-8.4Z" fill="currentColor" opacity="0.8" />
    <path d="M62 60c.5 6-.3 10-2.4 12.6 2.8-.6 4.6-4 4.4-8.4Z" fill="currentColor" opacity="0.8" />
    <path d="M50 59c0 9-.7 15-4.5 20-3 4-2.5 8.5 2 9.5 3.5 1 6.5-1 7-4" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="40" cy="43" rx="3.2" ry="4" fill="#14100C" />
    <ellipse cx="60" cy="43" rx="3.2" ry="4" fill="#14100C" />
    <path d="M50 33v10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
    <circle cx="50" cy="46" r="2" fill="currentColor" />
  </svg>
);

export const ModakIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2C11.5 3.5 10 6 8 8C5.5 10.5 4 13.5 4 17C4 20.3 7.6 22 12 22C16.4 22 20 20.3 20 17C20 13.5 18.5 10.5 16 8C14 6 12.5 3.5 12 2Z" opacity="0.85"/>
    <path d="M12 5V21" stroke="#14100C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8.5 11C8.5 15 9.5 19 12 21" stroke="#14100C" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M15.5 11C15.5 15 14.5 19 12 21" stroke="#14100C" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export const ToranGarland: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative w-full h-4 overflow-hidden opacity-75 ${className}`} aria-hidden="true">
    <div className="absolute inset-0 flex justify-around items-center">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#F59E0B] to-[#E2621B] shadow-[0_0_8px_#F59E0B]" />
          <div className="w-0.5 h-2 bg-[#E5A93C]/40" />
        </div>
      ))}
    </div>
  </div>
);
