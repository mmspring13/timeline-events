import { PropsWithChildren, useState } from "react";
import { TimelineContext } from "./context";
import { Context } from "../types";

export const TimelineProvider = ({
  children,
  defaultData,
}: PropsWithChildren<{
  defaultData: {
    periods: Context["periods"];
    currentPeriodIdx: number;
  };
}>) => {
  const [currentPeriodIdx, setPeriodIdx] = useState(0);

  return (
    <TimelineContext.Provider
      value={{
        ...defaultData,
        currentPeriodIdx,
        setPeriodIdx,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
