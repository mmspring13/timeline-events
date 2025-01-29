import useMedia from "react-use/lib/useMedia";
import { Dial } from "../dial";
import { Period } from "../period";
import { PeriodControl } from "../period-control/period-control";
import { TimelineProvider } from "../provider";
import { Slider } from "../slider";
import { Context } from "../types";
import "./widget.scss";

export type WidgetProps = {
  periods: Context["periods"];
  currentPeriodKey?: number;
};

export const Widget = ({ periods, currentPeriodKey = 0 }: WidgetProps) => {
  const isTablet = useMedia("(min-width: 980px)");

  return (
    <TimelineProvider defaultData={{ periods, currentPeriodKey }}>
      <div className="tl-widget">
        <div className="tl-widget__top">
          {isTablet && <Dial />}
          <Period />
        </div>
        <div className="tl-widget__bottom">
          <PeriodControl />
          <Slider />
        </div>
      </div>
    </TimelineProvider>
  );
};
