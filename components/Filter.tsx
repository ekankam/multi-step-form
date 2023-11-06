import React from "react";
import { Switch } from "./ui/switch";
import useStore from "@/store/useStore";
import { cn } from "@/lib/utils";

export default function Filter() {
  const {
    handleToggled,
    formData: { isToggled },
  } = useStore();

  return (
    <div className="bg-c-neutral-alabaster flex items-center mt-6 lg:mt-8 gap-6 rounded-md py-3 justify-center">
      <p className={cn("text-sm", { "text-c-neutral-cool-gray": isToggled })}>
        Monthly
      </p>
      <Switch onClick={() => handleToggled(isToggled)} />
      <p className={cn("text-sm", { "text-c-neutral-cool-gray": !isToggled })}>
        Yearly
      </p>
    </div>
  );
}
