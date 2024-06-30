'use client';

import { FooterProvider } from "@/context/footerContext";
import { UserProvider } from "@/context/userContext";
import { ReactNode } from "react";

export function Providers({ children }: {children: ReactNode}) {
  return (
      <UserProvider><FooterProvider>{children}</FooterProvider></UserProvider>
  );
}