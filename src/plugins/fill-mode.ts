import plugin from "tailwindcss/plugin";

export default plugin(function ({ addUtilities }) {
  addUtilities({
    ".animate-fill-none": {
      "animation-fill-mode": "none",
    },
    ".animate-fill-forwards": {
      "animation-fill-mode": "forwards",
    },
    ".animate-fill-backwards": {
      "animation-fill-mode": "backwards",
    },
    ".animate-fill-both": {
      "animation-fill-mode": "both",
    },
  });
});
