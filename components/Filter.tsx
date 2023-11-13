import React from "react";
import { Switch } from "./ui/switch";
import useStore from "@/store/useStore";
import { cn } from "@/lib/utils";

export default function Filter() {
  const { toggleSubscriptionPlan, isToggled, plan, setPlan, selectedAddOns } =
    useStore((state) => state);

  const initialState = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    type: "",
  };

  const handleClick = (t: boolean) => {
    toggleSubscriptionPlan(t);
    // Reset selected plan and selectedAddOns when the subscription plan
    //filter is toggled to reflect the correct plan and addOn details
    setPlan({ ...plan, ...initialState });
    selectedAddOns.length = 0;
  };

  return (
    <div className="bg-c-neutral-alabaster flex items-center mt-6 lg:mt-8 gap-6 rounded-md py-3 justify-center">
      <p className={cn("text-sm", { "text-c-neutral-cool-gray": isToggled })}>
        Monthly
      </p>
      <Switch onClick={() => handleClick(isToggled)} checked={isToggled} />
      <p className={cn("text-sm", { "text-c-neutral-cool-gray": !isToggled })}>
        Yearly
      </p>
    </div>
  );
}
