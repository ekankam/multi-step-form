import React from "react";

type TSectionHeader = {
  title: string;
  description: string;
};

export default function SectionHeader({
  title = "",
  description = "",
}: TSectionHeader) {
  return (
    <div className="mb-[22px] lg:mb-[35px] lg:mt-8">
      <h1 className="text-c-primary-marine-blue text-2xl font-bold lg:text-[32px] mb-2">
        {title}
      </h1>
      <p className="text-c-neutral-cool-gray">{description}</p>
    </div>
  );
}
