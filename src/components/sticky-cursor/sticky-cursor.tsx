import { motion, useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect } from "react";
import "./sticky-cursor.scss";

export const StickyCursor = () => {
  const cursorSize = 16;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    },
    [mouse.x, mouse.y],
  );

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]);

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      className="sticky-cursor"
    ></motion.div>
  );
};
