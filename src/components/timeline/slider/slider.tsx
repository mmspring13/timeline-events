import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
import { useTimelineContext } from "../hooks";
import cn from "clsx";
import "./slider.scss";
import { motion, MotionConfig } from "motion/react";
import ToggleIcon from "./../assets/toggle.svg?react";
import { useEffect, useRef, useState } from "react";
import useMedia from "react-use/lib/useMedia";

export const Slider = () => {
  const { periods, currentPeriodKey } = useTimelineContext();
  const period = periods[currentPeriodKey];
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);
  const isTablet = useMedia("(min-width: 980px)");

  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (isTablet) {
      swiperRef.current?.swiper.slideReset();
    }
  }, [isTablet]);

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div
        className="tl-slider"
        key={currentPeriodKey}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        {Boolean(showPrev && isTablet) && (
          <motion.button
            className="tl-slider__toggle"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <ToggleIcon className="tl-slider__toggle__icon" />
          </motion.button>
        )}
        <div className="tl-slider__swiper-wrapper">
          <Swiper
            className="tl-slider-swiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              640: {
                spaceBetween: 80,
                slidesPerView: 3,
              },
            }}
            initialSlide={0}
            ref={swiperRef}
            onSlideChange={(ctx) => {
              setShowNext(!ctx.isEnd);
              setShowPrev(!ctx.isBeginning);
            }}
          >
            {period.events.map((event) => (
              <SwiperSlide key={event.key} className="tl-slider__slide">
                {(slide) => {
                  return (
                    <div className={cn({ _disabled: !slide.isActive })}>
                      <span className="tl-slider__slide__title">
                        {event.title}
                      </span>
                      <span className="tl-slider__slide__content">
                        {event.content}
                      </span>
                    </div>
                  );
                }}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {Boolean(showNext && isTablet) && (
          <motion.button
            className="tl-slider__toggle __next"
            onClick={() => swiperRef.current?.swiper.slideNext()}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <ToggleIcon className="tl-slider__toggle__icon" />
          </motion.button>
        )}
      </motion.div>
    </MotionConfig>
  );
};
