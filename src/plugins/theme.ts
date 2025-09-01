import type { Config } from "tailwindcss";
import { getBareMilliseconds, getBareIntegers } from "./helper/bare-values";

const bareMilliseconds = getBareMilliseconds();
const bareIntegers = getBareIntegers();

const theme: Partial<Config["theme"]> = {
  extend: {
    animationDelay: {
      none: "0s",
      0: "0ms",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
      ...bareMilliseconds,
    },
    animationDuration: {
      none: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
      ...bareMilliseconds,
    },
    animationTimingFunction: {
      DEFAULT: "ease",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    animationIteration: {
      infinite: "infinite",
      once: "1",
      twice: "2",
      thrice: "3",
      ...bareIntegers,
    },
    animation: {
      spin: "spin var(--default-animation-duration, 1s) var(--default-animation-timing-function, linear) var(--default-animation-delay, 0s) infinite",
      ping: "ping var(--default-animation-duration, 1s) var(--default-animation-timing-function, cubic-bezier(0, 0, 0.2, 1)) var(--default-animation-delay, 0s) infinite",
      pulse:
        "pulse var(--default-animation-duration, 2s) var(--default-animation-timing-function, cubic-bezier(0.4, 0, 0.6, 1)) var(--default-animation-delay, 0s) infinite",
      bounce:
        "bounce var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) infinite",
      wiggle:
        "wiggle var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },
  },
};

export default theme;
