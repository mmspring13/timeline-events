import { useCallback, useEffect, useRef, useState } from "react";
import cn from "clsx";
import { useTimelineContext } from "../hooks/use-context";
import "./dial.scss";
import { motion, MotionConfig } from "motion/react";

export const Dial = () => {
  const { periods, setPeriodKey, currentPeriodKey } = useTimelineContext();
  const dialRef = useRef<HTMLDivElement>(null);
  const count = periods.length;
  const [targetRotation, setTargetRotation] = useState(0);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const [showLabel, setShowLabel] = useState(true);

  const rotateToPrimarySegment = useCallback(() => {
    const index = currentPeriodKey;
    const circle = dialRef.current;
    if (!circle) return;
    const anglePerDot = 360 / count;
    const primarySegmentAngle = -(360 / count);
    const clickedDotAngle = anglePerDot * index;
    const targetRotation = primarySegmentAngle - clickedDotAngle;
    setPeriodKey(index);
    setTargetRotation(targetRotation);
  }, [count, currentPeriodKey, setPeriodKey]);

  useEffect(() => {
    rotateToPrimarySegment();
  }, [rotateToPrimarySegment]);

  return (
    <div
      ref={dialRef}
      style={{ transform: `rotate(${targetRotation}deg)` }}
      className="tl-dial"
      onTransitionEndCapture={() => {
        setTimeout(() => {
          setShowLabel(true);
        }, 300);
      }}
    >
      {periods.map((period, i) => (
        <div
          key={period.key}
          style={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            "--count": String(count),
            "--i": String(i),
            "--rotate": String(Math.abs(targetRotation)),
          }}
          className={cn("tl-dial-dot", {
            _active: i === currentPeriodKey || i === hoveredIdx,
          })}
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(null)}
          onClick={() => {
            setPeriodKey(i);
            setShowLabel(false);
          }}
        >
          {(i === currentPeriodKey || i === hoveredIdx) && String(period.key)}
          <MotionConfig transition={{ duration: 1.2 }}>
            {Boolean(
              (i === currentPeriodKey || i === hoveredIdx) && showLabel,
            ) && (
              <motion.div
                className="tl-dial-dot__label"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              >
                {period.title}
              </motion.div>
            )}
          </MotionConfig>
        </div>
      ))}
    </div>
  );
};
