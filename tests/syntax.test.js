const { readFileSync } = require("fs");

describe("Tailwind v4 - CSS Syntax", () => {
  test("main CSS file should have imports", () => {
    const css = readFileSync("src/index.css", "utf8");

    expect(css).toContain("@import");
    expect(css).toContain("./utilities/animations.css");
    expect(css).toContain("./utilities/composition.css");
    expect(css).toContain("./utilities/delay.css");
  });

  test("animations.css should have @theme and @keyframes", () => {
    const css = readFileSync("src/utilities/animations.css", "utf8");

    expect(css).toContain("@theme default");
    expect(css).toContain("@keyframes wiggle");
    expect(css).toContain("--animate-wiggle:");
    expect(css).toContain("--animate-spin:");
  });

  test("utility files should have @utility syntax", () => {
    const utilityFiles = [
      "composition.css",
      "delay.css",
      "direction.css",
      "duration.css",
      "fill-mode.css",
      "iteration-count.css",
      "play-state.css",
      "timing-function.css",
    ];

    utilityFiles.forEach((filename) => {
      const css = readFileSync(`src/utilities/${filename}`, "utf8");
      expect(css).toContain("@utility");
    });
  });
});
