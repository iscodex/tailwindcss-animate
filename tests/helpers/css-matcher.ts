import postcss from "postcss";
import type { Config } from "tailwindcss";

export async function generateCSSv3(
  config: Config,
  content: string = ""
): Promise<string> {
  const tailwindcss = await import("tailwindcss");
  const tailwindPlugin = (tailwindcss.default as any)(config);

  const result = await postcss([tailwindPlugin]).process(
    `
    @tailwind base;
    @tailwind components; 
    @tailwind utilities;
    ${content}
  `,
    {
      from: undefined,
    }
  );

  return result.css;
}

// export async function generateCSSv4(cssContent: string): Promise<string> {
//   const { default: tailwindcss } = await import("tailwindcss");

//   const result = await postcss([tailwindcss()]).process(cssContent, {
//     from: undefined,
//   });

//   return result.css;
// }

export const generateCSS = generateCSSv3;

export function normalizeCss(css: string): string {
  return css.replace(/\s+/g, " ").replace(/;\s*}/g, "}").trim();
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toContainCss(expected: string): R;
    }
  }
}

expect.extend({
  toContainCss(received: string, expected: string) {
    const normalizedReceived = normalizeCss(received);
    const normalizedExpected = normalizeCss(expected);

    const pass = normalizedReceived.includes(normalizedExpected);

    if (pass) {
      return {
        message: () => `Expected CSS not to contain: ${normalizedExpected}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Expected CSS to contain: ${normalizedExpected}\nReceived: ${normalizedReceived}`,
        pass: false,
      };
    }
  },
});
