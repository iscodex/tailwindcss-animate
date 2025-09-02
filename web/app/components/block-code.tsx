"use client";

import { useLayoutEffect, useState, type JSX } from "react";
import type { BundledLanguage, BundledTheme } from "shiki/bundle/web";
import { highlight } from "~/lib/shiki";

interface BlockCodeProps {
  children: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
}

export function BlockCode({ children, lang, theme }: BlockCodeProps) {
  const [nodes, setNodes] = useState<JSX.Element | undefined>();

  const code = dedent(children);

  useLayoutEffect(() => {
    void highlight(code, lang, theme).then(setNodes);
  }, [code]);

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-700/30 bg-gray-950/30">
      <div className="overflow-x-auto p-4 text-sm leading-6 [&_code]:!bg-transparent [&_pre]:!bg-transparent [&_pre]:!p-0">
        {nodes}
      </div>
    </div>
  );
}

const dedent = (code: string): string => {
  const lines = code
    .replace(/^\n/, "")
    .replace(/\n\s*$/, "")
    .split("\n");
  const minIndent = Math.min(
    ...lines
      .filter((line) => line.trim())
      .map((line) => line.match(/^(\s*)/)![0].length),
  );
  return lines.map((line) => line.slice(minIndent)).join("\n");
};
