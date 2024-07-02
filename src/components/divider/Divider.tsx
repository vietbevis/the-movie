import React from "react";
import { cn } from "@/lib/utils";

const Divider = ({
  layout,
  className,
}: {
  layout?: "vertical";
  className?: string;
}) => {
  if (layout === "vertical") {
    return <div className={cn("bg-input w-px h-full", className)}></div>;
  }
  return <div className={cn("bg-input h-px w-full", className)}></div>;
};

export default Divider;
