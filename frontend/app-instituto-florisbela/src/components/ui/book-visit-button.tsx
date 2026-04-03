import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

type BookVisitButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "variant"
>;

function BookVisitButton({
  className,
  asChild = false,
  ...props
}: BookVisitButtonProps) {
  return (
    <Button
      variant="default"
      asChild={asChild}
      className={cn(
        "cursor-pointer rounded-full px-6 py-2.5",
        "bg-red-primary font-nunito shadow-lg shadow-red-primary/30",
        "transform transition-all hover:-translate-y-1",
        className,
      )}
      {...props}
    />
  );
}

export default BookVisitButton;
