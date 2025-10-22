import React from 'react';

export const BackgroundBeam: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-canvas-bg-subtle">
      <div 
        className="absolute -top-20 -left-20 w-[60vw] h-[100vh] opacity-50 bg-[linear-gradient(135deg,var(--primary-line),transparent)] blur-[60px]"
      />
    </div>
  );
};