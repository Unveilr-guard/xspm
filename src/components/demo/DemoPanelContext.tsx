import React, { createContext, useContext, useState } from 'react';

interface DemoPanelCtx {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const Ctx = createContext<DemoPanelCtx>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export const DemoPanelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Ctx.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </Ctx.Provider>
  );
};

export const useDemoPanel = () => useContext(Ctx);
