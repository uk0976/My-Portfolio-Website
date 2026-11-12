import React, { createContext, useContext, useState, useEffect } from 'react';

interface MotionContextType {
  motionEnabled: boolean;
  toggleMotion: () => void;
}

const MotionContext = createContext<MotionContextType>({
  motionEnabled: true,
  toggleMotion: () => {},
});

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [motionEnabled, setMotionEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('uk_motion_preference');
      if (saved !== null) return saved === 'true';
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });

  const toggleMotion = () => {
    setMotionEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('uk_motion_preference', String(next));
      return next;
    });
  };

  useEffect(() => {
    if (motionEnabled) {
      document.documentElement.classList.remove('reduced-motion');
    } else {
      document.documentElement.classList.add('reduced-motion');
    }
  }, [motionEnabled]);

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => useContext(MotionContext);
