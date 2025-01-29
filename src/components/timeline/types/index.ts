import { ReactNode } from "react";

export type Period = {
  key: string;
  period: [ReactNode, ReactNode];
  events: Array<{
    key: string;
    title: ReactNode;
    content: ReactNode;
  }>;
};

export type Context = {
  periods: Array<Period>;
  currentPeriodIdx: number;
  setPeriodIdx: (value: number) => void;
};
