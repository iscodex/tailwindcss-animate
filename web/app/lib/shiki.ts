import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs, type JSX } from "react/jsx-runtime";
import {
  codeToHast,
  type BundledLanguage,
  type BundledTheme,
} from "shiki/bundle/web";

export async function highlight(
  code: string,
  lang: BundledLanguage = "ts",
  theme: BundledTheme = "aurora-x",
) {
  const out = await codeToHast(code, {
    lang,
    theme,
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element;
}
