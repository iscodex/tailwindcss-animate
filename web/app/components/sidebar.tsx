import { cn } from "~/lib/cn";

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
            "bg-gray-900/50  border-gray-800/50 sticky top-0 overflow-y-auto h-full max-h-dvh",
            position === "start" ? "left-0 border-r" : "right-0 border-l",
          )}
        >
          <div className="py-6">{children}</div>
        </aside>
      </div>
    </div>
  );
};
