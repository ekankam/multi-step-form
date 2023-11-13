import { cn } from "@/lib/utils";
import useStore from "@/store/useStore";
import React from "react";

type TStep = {
  stepNumber: number;
  smallTitle?: string;
  sectionTitle?: string;
};

export default function Step({
  stepNumber = 1,
  smallTitle = "",
  sectionTitle = "",
}: TStep) {
  const step = useStore((state) => state.step);

  return (
    <section className="uppercase flex items-center gap-4">
      <p
        className={cn(
          "w-[33px] h-[33px] rounded-full flex items-center justify-center text-sm font-bold text-c-neutral-white border border-c-neutral-white",
          {
            "bg-c-primary-light-blue text-c-primary-marine-blue border-c-primary-light-blue":
              stepNumber === step,
          }
        )}
      >
        {stepNumber}
      </p>
      <div className="flex flex-col">
        <p className="text-xs text-c-primary-pastel-blue">{smallTitle}</p>
        <p className="text-sm text-c-neutral-white font-bold">{sectionTitle}</p>
      </div>
    </section>
  );
}
