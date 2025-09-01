import plugin from "tailwindcss/plugin";

export default plugin(function ({ addUtilities }) {
  addUtilities({
    ".animate-replace": {
      "animation-composition": "replace",
    },
    ".animate-add": {
      "animation-composition": "add",
    },
    ".animate-accumulate": {
      "animation-composition": "accumulate",
    },
  });
});
