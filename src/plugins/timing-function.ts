import plugin from "tailwindcss/plugin";

export default plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "animate-ease": (value: string) => ({
        "animation-timing-function": value,
      }),
    },
    {
      values: theme("animationTimingFunction"),
    }
  );
});
