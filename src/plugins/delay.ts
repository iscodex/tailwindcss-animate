import plugin from "tailwindcss/plugin";

export default plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "animate-delay": (value) => ({
        "animation-delay": value,
      }),
    },
    {
      values: theme("animationDelay"),
    }
  );
});
