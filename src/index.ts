import plugin from "tailwindcss/plugin";

import composition from "./plugins/composition";
import delay from "./plugins/delay";
import direction from "./plugins/direction";
import duration from "./plugins/duration";
import fillMode from "./plugins/fill-mode";
import iterationCount from "./plugins/iteration-count";
import playState from "./plugins/play-state";
import timingFunction from "./plugins/timing-function";

import theme from "./plugins/theme";

export default plugin(
  (api) => {
    [
      composition,
      delay,
      direction,
      duration,
      fillMode,
      iterationCount,
      playState,
      timingFunction,
    ].forEach((plugin) => plugin.handler(api));
  },
  { theme }
);
