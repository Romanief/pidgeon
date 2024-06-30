"use client"

import { ReactNode, createContext, useContext, useState } from "react";


// Define the shape of the context
interface FooterContextProps {
  x: number
  setX: (number: number) => void;
}

// Create the context with default values
const FooterContext = createContext<FooterContextProps | undefined>(undefined);

// Create a provider component
export const FooterProvider = ({ children }: { children: ReactNode }) => {
  const [x, setX] = useState<number>(0);

  return (
    <FooterContext.Provider value={{ x, setX }}>
      {children}
    </FooterContext.Provider>
  );
};

// Custom hook for consuming the user context
export const useFooter = () => {
  const context = useContext(FooterContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};