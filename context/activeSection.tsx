"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react';

type ActiveSectionProps = {
  children: React.ReactNode
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  toggleTime: number;
  setToggleTime: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

function ActiveSection({
  children,
}: ActiveSectionProps) {

  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [ toggleTime, setToggleTime ] = useState(0); // time to disable stop in toggle

  return <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    toggleTime,
    setToggleTime,
  }}>
    {children}
  </ActiveSectionContext.Provider>
}

export function useContextSection() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error('useContextSection must be used within an ActiveSectionContext');
  }
  return context;
}

export default ActiveSection;