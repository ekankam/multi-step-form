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
  return (
    <div className="uppercase flex items-center gap-4">
      <div className="w-[33px] h-[33px] rounded-full flex items-center justify-center text-sm font-bold text-c-neutral-white border border-c-neutral-white">
        {stepNumber}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-c-primary-pastel-blue">{smallTitle}</span>
        <span className="text-sm text-c-neutral-white font-bold">
          {sectionTitle}
        </span>
      </div>
    </div>
  );
}
