import { cn } from "~/lib/cn";

interface PatternProps {
  hasShape?: boolean;
}

export const Pattern = ({ hasShape = true }: PatternProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 bg-gray-950",
        "bg-[linear-gradient(to_right,rgba(71,85,105,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.2)_1px,transparent_1px)]",
        "bg-[length:32px_32px,32px_32px]",
        hasShape && [
          "bg-[linear-gradient(to_right,rgba(71,85,105,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.2)_1px,transparent_1px),radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15)_0%,transparent_70%)]",
          "bg-[length:32px_32px,32px_32px,100%_100%]",
          "[mask-image:radial-gradient(ellipse_80%_80%_at_100%_0%,#000_50%,transparent_90%)]",
          "[-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_100%_0%,#000_50%,transparent_90%)]",
        ],
      )}
    />
  );
};
