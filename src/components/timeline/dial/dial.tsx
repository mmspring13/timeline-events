import { useCallback, useRef, useState } from "react";
import { useTimelineContext } from "../hooks/use-context";
import "./style.css";

export const Dial = () => {
  const { periods, currentPeriodIdx } = useTimelineContext();
  const period = periods[currentPeriodIdx];
  const dialRef = useRef<HTMLDivElement>(null);
  const count = period.events.length;
  const [targetRotation, setTargetRotation] = useState(0);

  const rotateToPrimarySegment = useCallback(
    (index: number) => {
      const circle = dialRef.current;
      if (!circle) return;
      const anglePerDot = 360 / count; // Angle between each dot
      // const primarySegmentAngle = -60; // Primary segment is at 0 degrees (right side)
      const primarySegmentAngle = -(360 / count);
      const clickedDotAngle = anglePerDot * index; // Angle of the clicked dot
      const targetRotation = primarySegmentAngle - clickedDotAngle; // Rotation needed
      setTargetRotation(targetRotation);

      // // Update the rotation slider value
      // rotateInput.value = (360 - targetRotation) % 360;
    },
    [count],
  );

  // const createDots = useCallback(() => {
  //   const circle = dialRef.current;
  //   if (!circle) return;
  //   circle.innerHTML = "";

  //   for (let i = 0; i < periods.length; i++) {
  //     const dot = document.createElement("div");
  //     dot.classList.add("dial-dot");
  //     dot.style.setProperty("--i", String(i));
  //     dot.style.setProperty("--count", String(periods.length));

  //     // Add label to the dot
  //     const label = document.createElement("span");
  //     label.textContent = String(i + 1); // Number the dots starting from 1
  //     dot.appendChild(label);

  //     // Add click event to rotate the circle
  //     dot.addEventListener("click", () =>
  //       rotateToPrimarySegment(i, periods.length),
  //     );
  //     circle.appendChild(dot);
  //   }
  // }, [periods.length, rotateToPrimarySegment]);

  // useEffect(() => {
  //   createDots();
  // }, [createDots]);
  console.log("period.events", period.events);
  return (
    <div
      ref={dialRef}
      style={{ transform: `rotate(${targetRotation}deg)` }}
      className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[33.125rem] aspect-square rounded-full border border-line transition-transform duration-700"
    >
      {period.events.map((event, i) => (
        <div
          key={event.key}
          style={{
            "--count": String(count),
            "--i": String(i),
            "--rotate": String(Math.abs(targetRotation)),
          }}
          className="dial-dot absolute max-w-5 w-full max-h-5 h-full z-10 aspect-square rounded-full top-[50%] left-[50%] flex justify-center items-center cursor-pointer"
          onClick={() => rotateToPrimarySegment(i)}
        >
          {event.key}
        </div>
      ))}
    </div>
  );
};
