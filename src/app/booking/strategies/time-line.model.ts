import { TimelineStatus } from "./time-line-status.enum";

export interface TimeLineModel {
  index: number,
  class: string,
  titleColor: string,
  title: string,
  status: TimelineStatus | string,
}
