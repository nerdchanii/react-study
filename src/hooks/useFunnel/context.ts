import { Dispatch, createContext } from "react";

export type FunnelContextProps = {
  currentStep: string;
  setStep: Dispatch<React.SetStateAction<string>>;
};

export const FunnelContext = createContext<FunnelContextProps | null>(null);
