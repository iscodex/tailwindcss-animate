import plugin from "tailwindcss/plugin";

export default plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "animate-duration": (value) => ({
        "animation-duration": value,
      }),
    },
    {
      values: theme("animationDuration"),
    }
  );
});
