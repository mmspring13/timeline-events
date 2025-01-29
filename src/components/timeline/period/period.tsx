import { motion, MotionConfig } from "motion/react";
import { useTimelineContext } from "../hooks";
import "./period.scss";

export const Period = () => {
  const { periods, currentPeriodKey } = useTimelineContext();
  const [from, to] = periods[currentPeriodKey].period;

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.span
        className="tl-period"
        key={`${from}${to}`}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <span className="tl-period__from">{from}</span>{" "}
        <span className="tl-period__to">{to}</span>
      </motion.span>
    </MotionConfig>
  );
};
