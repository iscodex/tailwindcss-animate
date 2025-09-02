import { cn } from "~/lib/cn";
import { ScrollArea } from "./scroll-area";

interface SidebarProps {
  children?: React.ReactNode;
  position?: "start" | "end";
  className?: string;
}

export const Sidebar = ({
  children,
  position = "start",
  className,
}: SidebarProps) => {
  return (
    <div className={cn("relative w-80", className)}>
      <div className="absolute inset-0">
        <aside
          className={cn(
            "sticky top-0 h-full max-h-dvh border-gray-800/50 bg-gray-900/50",
            position === "start" ? "left-0 border-r" : "right-0 border-l",
          )}
        >
          <ScrollArea>
            <div className="py-6">{children}</div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
};
