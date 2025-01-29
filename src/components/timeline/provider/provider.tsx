import { PropsWithChildren, useState } from "react";
import { TimelineContext } from "./context";
import { Context } from "../types";

export const TimelineProvider = ({
  children,
  defaultData,
}: PropsWithChildren<{
  defaultData: {
    periods: Context["periods"];
    currentPeriodKey: number;
  };
}>) => {
  const [currentPeriodKey, setPeriodKey] = useState(0);

  return (
    <TimelineContext.Provider
      value={{
        ...defaultData,
        currentPeriodKey,
        setPeriodKey,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
