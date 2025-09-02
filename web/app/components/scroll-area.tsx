import * as ScrollPrimitive from "@radix-ui/react-scroll-area";

interface ScrollAreaProps extends ScrollPrimitive.ScrollAreaProps {
  axis?: "both" | "horizontal" | "vertical";
}

export const ScrollArea = ({
  axis = "both",
  children,
  ...props
}: ScrollAreaProps) => {
  const axisX = axis === "both" || axis === "horizontal";
  const axisY = axis === "both" || axis === "vertical";

  return (
    <ScrollPrimitive.Root className="h-full w-full overflow-hidden" {...props}>
      <ScrollPrimitive.Viewport className="w-ful h-full">
        {children}
      </ScrollPrimitive.Viewport>
      {axisX && (
        <ScrollPrimitive.Scrollbar
          orientation="horizontal"
          className="z-50 flex h-2 touch-none flex-col bg-transparent p-[2px] transition-colors select-none"
        >
          <ScrollPrimitive.Thumb className="relative flex-1 rounded-lg bg-gray-800 before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:content-[''] hover:cursor-pointer hover:bg-gray-700" />
        </ScrollPrimitive.Scrollbar>
      )}
      {axisY && (
        <ScrollPrimitive.Scrollbar
          orientation="vertical"
          className="z-50 flex w-2 touch-none bg-transparent p-[2px] transition-colors select-none"
        >
          <ScrollPrimitive.Thumb className="relative flex-1 rounded-lg bg-gray-800 before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:content-[''] hover:cursor-pointer hover:bg-gray-700" />
        </ScrollPrimitive.Scrollbar>
      )}
      <ScrollPrimitive.Corner className="bg-transparent" />
    </ScrollPrimitive.Root>
  );
};
