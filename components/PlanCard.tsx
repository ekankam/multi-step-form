import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import useStore from "@/store/useStore";
import { cn } from "@/lib/utils";

export default function PlanCard({ plan, onClick }: any) {
  const { formData } = useStore();

  let imgSrc = "";
  let alt = "";

  switch (plan?.name) {
    case "Arcade":
      imgSrc = "/images/icon-arcade.svg";
      alt = plan?.name;
      break;
    case "Advanced":
      imgSrc = "/images/icon-advanced.svg";
      alt = plan?.name;
    case "Pro":
      imgSrc = "/images/icon-pro.svg";
      alt = plan?.name;
    default:
      break;
  }

  const formattedPrice = formData?.isToggled
    ? `$${plan.subscription.yearly.price}/yr`
    : `$${plan.subscription.month.price}/mo`;

  return (
    <Card
      className={cn(
        "w-full cursor-pointer hover:border hover:border-c-primary-purplish-blue",
        {
          "border border-c-primary-purplish-blue bg-c-neutral-alabaster":
            formData && formData.plan?.id === plan.id,
        }
      )}
      onClick={onClick}
    >
      <CardContent className="w-full lg:pt-5 flex items-center h-full gap-[14px] p-4 lg:flex-col lg:items-start">
        <div className="relative w-10 h-10 lg:mb-[39px]">
          <Image src={imgSrc} alt={alt} fill />
        </div>
        <div>
          <CardTitle className="text-base font-medium text-c-primary-marine-blue">
            {plan?.name}
          </CardTitle>
          <p className="text-sm text-c-neutral-cool-gray">{formattedPrice}</p>
        </div>
      </CardContent>
    </Card>
  );
}
