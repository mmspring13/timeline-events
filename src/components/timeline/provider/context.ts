import { createContext } from "react";
import { Context } from "../types";

export const defaultContext: Context = {
  periods: [],
  currentPeriodKey: 0,
  setPeriodKey: () => true,
};

export const TimelineContext = createContext<Context>(defaultContext);
