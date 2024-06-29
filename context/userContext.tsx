// contexts/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the user data
interface User {
  id: string;
  name: string;
  email: string;
  phone: number;
}

// Define the shape of the context
interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Create the context with default values
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for consuming the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
