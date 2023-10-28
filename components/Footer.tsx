import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type TFooter = {
  className?: string;
  stepNumber?: number;
};

export default function Footer({ className, stepNumber = 1 }: TFooter) {
  return (
    <footer
      className={cn(
        "p-4 bg-c-neutral-white w-full flex items-center justify-between",
        className
      )}
    >
      {stepNumber > 1 && (
        <Button variant="ghost" className="text-c-neutral-cool-gray">
          Go Back
        </Button>
      )}
      {stepNumber === 1 && <div className="w-full" />}
      <Button
        className={cn(
          "bg-c-primary-marine-blue text-c-neutral-white hover:bg-c-primary-marine-blue-hover",
          {
            "bg-c-primary-purplish-blue": stepNumber === 4,
          }
        )}
      >
        {stepNumber === 4 ? "Confirm" : "Next Step"}
      </Button>
    </footer>
  );
}
