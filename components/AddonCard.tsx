import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import useStore from "@/store/useStore";
import { cn } from "@/lib/utils";

type AddOn = {
  id: number;
  name: string;
  description: string;
  subscription: {
    monthly: {
      price: number;
      type: string;
    };
    yearly: {
      price: number;
      type: string;
    };
  };
};

function normalizeAddOn(addOn: AddOn, isToggled: boolean) {
  return {
    id: addOn.id,
    name: addOn.name,
    description: addOn.description,
    price: isToggled
      ? addOn.subscription.yearly.price
      : addOn.subscription.monthly.price,
    type: isToggled
      ? addOn.subscription.yearly.type
      : addOn.subscription.monthly.type,
  };
}

export default function AddonCard({ addOn }: any) {
  const { isToggled, toggleAddOn, unToggledAddOn, selectedAddOns } = useStore(
    (state) => state
  );

  const isChecked = selectedAddOns.some((item) => item.id === addOn.id);

  const handleAddOn = () => {
    if (isChecked) {
      unToggledAddOn(addOn.id);
    } else {
      toggleAddOn(normalizeAddOn(addOn, isToggled));
    }
  };

  const formattedPrice = isToggled
    ? `+$${addOn?.subscription.yearly.price}/yr`
    : `+$${addOn?.subscription.monthly.price}/mo`;

  return (
    <label htmlFor={addOn.id}>
      <Card
        className={cn("hover:border-c-primary-purplish-blue cursor-pointer", {
          "border border-c-primary-purplish-blue bg-c-neutral-alabaster":
            isChecked,
        })}
      >
        <CardContent className="flex items-center py-[13px] px-4 w-full justify-between lg:py-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Checkbox
              id={addOn.id}
              checked={isChecked}
              onCheckedChange={handleAddOn}
            />
            <div>
              <CardTitle className="text-sm lg:text-base font-medium text-c-primary-marine-blue">
                {addOn?.name}
              </CardTitle>
              <p className="text-xs lg:text-[15px] text-c-neutral-cool-gray">
                {addOn?.description}
              </p>
            </div>
          </div>
          <div className="text-xs text-c-primary-purplish-blue lg:text-[15px]">
            {formattedPrice}
          </div>
        </CardContent>
      </Card>
    </label>
  );
}
