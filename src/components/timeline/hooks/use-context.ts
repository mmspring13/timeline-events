import { useContext } from "react";
import { TimelineContext } from "../provider/context";

export const useTimelineContext = () => useContext(TimelineContext);
