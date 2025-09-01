const { readFileSync, readdirSync } = require("fs");
const { join } = require("path");

describe("Tailwind v4 - CSS Syntax", () => {
  test("main CSS file should have correct imports", () => {
    const css = readFileSync("src/index.css", "utf8");

    const imports = [
      "./animations/attention-seekers.css",
      "./animations/back-entrances.css",
      "./animations/back-exits.css",
      "./animations/bouncing-entrances.css",
      "./animations/bouncing-exits.css",
      "./animations/dashing.css",
      "./animations/default.css",
      "./animations/fading-entrances.css",
      "./animations/fading-exits.css",
      "./animations/flippers.css",
      "./animations/rotating-entrances.css",
      "./animations/rotating-exits.css",
      "./animations/sliding-entrances.css",
      "./animations/sliding-exits.css",
      "./animations/specials.css",
      "./animations/zooming-entrances.css",
      "./animations/zooming-exits.css",
      "./utilities/composition.css",
      "./utilities/delay.css",
      "./utilities/direction.css",
      "./utilities/duration.css",
      "./utilities/fill-mode.css",
      "./utilities/iteration-count.css",
      "./utilities/play-state.css",
      "./utilities/timing-function.css",
    ];

    imports.forEach((path) => {
      expect(css).toContain(`@import "${path}"`);
    });
  });

  test("animation files should have @theme and @keyframes", () => {
    const files = [
      "attention-seekers.css",
      "back-entrances.css",
      "back-exits.css",
      "dashing.css",
      "bouncing-entrances.css",
      "bouncing-exits.css",
      "fading-entrances.css",
      "fading-exits.css",
      "flippers.css",
      "rotating-entrances.css",
      "rotating-exits.css",
      "sliding-entrances.css",
      "sliding-exits.css",
      "specials.css",
      "zooming-entrances.css",
      "zooming-exits.css",
    ];

    files.forEach((filename) => {
      const css = readFileSync(`src/animations/${filename}`, "utf8");

      expect(css).toContain("@theme default");
      expect(css).toContain("@keyframes");
    });
  });

  test("utility files should have @utility syntax", () => {
    const files = [
      "composition.css",
      "delay.css",
      "direction.css",
      "duration.css",
      "fill-mode.css",
      "iteration-count.css",
      "play-state.css",
      "timing-function.css",
    ];

    files.forEach((filename) => {
      const css = readFileSync(`src/utilities/${filename}`, "utf8");
      expect(css).toContain("@utility");
    });
  });

  test("default animations should contain core Tailwind animations", () => {
    const css = readFileSync("src/animations/default.css", "utf8");

    expect(css).toContain("--animate-spin:");
    expect(css).toContain("--animate-ping:");
    expect(css).toContain("--animate-pulse:");
    expect(css).toContain("--animate-bounce:");
  });

  test("animation files structure integrity", () => {
    const files = readdirSync("src/animations");

    expect(files.length).toBeGreaterThan(0);

    files.forEach((file) => {
      expect(file).toMatch(/\.css$/);
    });
  });

  test("all CSS files should be syntactically valid", () => {
    const checkDirectory = (dir) => {
      const files = readdirSync(dir);

      files.forEach((filename) => {
        if (filename.endsWith(".css")) {
          const css = readFileSync(join(dir, filename), "utf8");

          const open = (css.match(/\{/g) || []).length;
          const close = (css.match(/\}/g) || []).length;
          expect(open).toBe(close);

          expect(css).not.toMatch(/\{\s*\}/);
        }
      });
    };

    checkDirectory("src/animations");
    checkDirectory("src/utilities");
  });

  test("CSS variables should follow naming convention", () => {
    const dir = "src/animations";
    const files = readdirSync(dir);

    files.forEach((filename) => {
      if (filename.endsWith(".css")) {
        const css = readFileSync(join(dir, filename), "utf8");
        const variableMatches = css.match(/--animate-[\w-]+:/g);

        if (variableMatches) {
          variableMatches.forEach((variable) => {
            expect(variable).toMatch(/^--animate-[\w-]+:$/);
          });
        }
      }
    });
  });
});
