import { Dispatch, ReactNode, SetStateAction } from "react";

export type Period = {
  key: string;
  period: [ReactNode, ReactNode];
  title: ReactNode;
  events: Array<{
    key: string;
    title: ReactNode;
    content: ReactNode;
  }>;
};

export type Context = {
  periods: Array<Period>;
  currentPeriodKey: number;
  setPeriodKey: Dispatch<SetStateAction<number>>;
};
