import { Dial } from "../dial";
import { TimelineProvider } from "../provider";
import { Context } from "../types";

export type WidgetProps = {
  periods: Context["periods"];
  currentPeriodIdx?: number;
};

export const Widget = ({ periods, currentPeriodIdx = 0 }: WidgetProps) => {
  // const [from, to] = periods

  return (
    <TimelineProvider defaultData={{ periods, currentPeriodIdx }}>
      <div className="absolute inset-0 m-auto h-full w-full">
        <Dial />
      </div>
    </TimelineProvider>
  );
};
