import type { AnimateClass } from "./animate";

export type Timing = {
  name: string;
  children: TimingValue[];
};

export type TimingValue = {
  name: string;
  value: AnimateClass;
};
