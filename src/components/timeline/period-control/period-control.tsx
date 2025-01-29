import { useMemo } from "react";
import { useTimelineContext } from "../hooks";
import "./period-control.scss";
import ToggleIcon from "./../assets/toggle.svg?react";

export const PeriodControl = () => {
  const { currentPeriodKey, periods, setPeriodKey } = useTimelineContext();

  const [currentPeriod, countOfPeriods] = useMemo(() => {
    return [
      String(currentPeriodKey + 1).padStart(2, "0"),
      String(periods.length).padStart(2, "0"),
    ];
  }, [currentPeriodKey, periods.length]);

  const onNext = () =>
    setPeriodKey((p) => {
      if (p < periods.length - 1) {
        return p + 1;
      }
      return p;
    });
  const onPrev = () =>
    setPeriodKey((p) => {
      if (p > 0) {
        return p - 1;
      }
      return p;
    });

  return (
    <div className="tl-period-control">
      <span className="tl-period-control__state">
        {currentPeriod}/{countOfPeriods}
      </span>
      <div className="tl-period-control__btns">
        <button
          type="button"
          className="tl-period-control__btn"
          onClick={onPrev}
          disabled={currentPeriodKey <= 0}
        >
          <ToggleIcon className="tl-period-control__btn__icon" />
        </button>
        <button
          type="button"
          className="tl-period-control__btn __next"
          onClick={onNext}
          disabled={currentPeriodKey >= periods.length - 1}
        >
          <ToggleIcon className="tl-period-control__btn__icon" />
        </button>
      </div>
    </div>
  );
};
