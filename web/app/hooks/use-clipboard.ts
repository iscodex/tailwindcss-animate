import { useState, useCallback } from "react";

export function useClipboard(resetInterval: number = 1500) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => setCopied(false), resetInterval);
        return true;
      } catch (error) {
        console.error("Clipboard copy failed:", error);
        setCopied(false);
        return false;
      }
    },
    [resetInterval],
  );

  return { copied, copy };
}
