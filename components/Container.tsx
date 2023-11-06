import { cn } from "@/lib/utils";
import React from "react";

type TContainer = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: TContainer) {
  return (
    <section
      className={cn(
        "w-full h-full px-6 py-8 lg:px-[100px] lg:pt-10 lg:min-h-[568px]",
        className
      )}
    >
      {children}
    </section>
  );
}
