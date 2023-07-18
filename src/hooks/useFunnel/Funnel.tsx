import { useContext, useState } from "react";
import { FunnelContext } from "./context";

const useFunnelContext = () => {
  const context = useContext(FunnelContext);
  if (!context) throw new Error("useFunnelStep must be used within a Funnel");
  return context;
};

export function useFunnel(steps: string[]) {
  if (typeof steps === "undefined")
    throw new Error("useFunnel must be used with at least one step");
  if (steps.length === 0)
    throw new Error("useFunnel must be used with at least one step");

  const [currentStep, setStep] = useState(steps[0]);

  function Funnel({ children }: { children: React.ReactNode }) {
    return (
      <FunnelContext.Provider value={{ currentStep, setStep }}>
        {children}
      </FunnelContext.Provider>
    );
  }

  function Steps({
    children,
    name,
  }: {
    children: React.ReactNode;
    name: string;
  }) {
    const { currentStep } = useFunnelContext();
    if (currentStep !== name) return null;
    return children;
  }

  Funnel.Steps = Steps;

  return [Funnel, setStep] as const;
}
