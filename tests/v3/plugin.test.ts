import { generateCSS } from "../helpers/css-matcher";
import animatePlugin from "../../dist/index.js";
import type { Config } from "tailwindcss";

describe("Tailwind v3 - Animation Plugin", () => {
  const config: Config = {
    content: [{ raw: "animate-wiggle animate-delay-100 animate-duration-300" }],
    plugins: [animatePlugin],
  };

  test("should generate wiggle animation", async () => {
    const css = await generateCSS(config);

    expect(css).toContainCss(
      ".animate-wiggle{animation:wiggle var(--default-animation-duration,1s) var(--default-animation-timing-function,ease) var(--default-animation-delay,0s) both}"
    );
  });

  test("should generate delay utilities", async () => {
    const css = await generateCSS(config);

    expect(css).toContainCss(".animate-delay-100{animation-delay:100ms}");
  });

  test("should generate duration utilities", async () => {
    const css = await generateCSS(config);

    expect(css).toContainCss(".animate-duration-300{animation-duration:300ms}");
  });

  test("should generate composition utilities", async () => {
    const config: Config = {
      content: [{ raw: "animate-replace animate-add" }],
      plugins: [animatePlugin],
    };

    const css = await generateCSS(config);

    expect(css).toContainCss(".animate-replace{animation-composition:replace}");
    expect(css).toContainCss(".animate-add{animation-composition:add}");
  });
});
