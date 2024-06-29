'use client';

import { UserProvider } from "@/context/userContext";
import { ReactNode } from "react";

export function Providers({ children }: {children: ReactNode}) {
  return (
      <UserProvider>{children}</UserProvider>
  );
}