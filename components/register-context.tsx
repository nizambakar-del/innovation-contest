"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type RegisterContextValue = {
  open: boolean;
  openRegister: () => void;
  closeRegister: () => void;
};

const RegisterContext = createContext<RegisterContextValue | null>(null);

export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openRegister = useCallback(() => setOpen(true), []);
  const closeRegister = useCallback(() => setOpen(false), []);
  const value = useMemo(
    () => ({ open, openRegister, closeRegister }),
    [open, openRegister, closeRegister],
  );

  return <RegisterContext.Provider value={value}>{children}</RegisterContext.Provider>;
}

export function useRegister() {
  const value = useContext(RegisterContext);
  if (!value) {
    throw new Error("useRegister must be used within RegisterProvider");
  }
  return value;
}
