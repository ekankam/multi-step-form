import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import useStore from "@/store/useStore";
import { cn } from "@/lib/utils";

export default function PlanCard({ item, onClick }: any) {
  const { isToggled, plan } = useStore((state) => state);

  let imgSrc = "";
  let alt = "";

  switch (item?.name) {
    case "Arcade":
      imgSrc = "/images/icon-arcade.svg";
      alt = item?.name;
      break;
    case "Advanced":
      imgSrc = "/images/icon-advanced.svg";
      alt = item?.name;
    case "Pro":
      imgSrc = "/images/icon-pro.svg";
      alt = item?.name;
    default:
      break;
  }

  const formattedPrice = isToggled
    ? `$${item.subscription.yearly?.price}/yr`
    : `$${item.subscription.monthly?.price}/mo`;

  return (
    <Card
      className={cn(
        "w-full cursor-pointer hover:border hover:border-c-primary-purplish-blue",
        {
          "border border-c-primary-purplish-blue bg-c-neutral-alabaster":
            plan && plan?.id === item.id,
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
            {item?.name}
          </CardTitle>
          <p className="text-sm text-c-neutral-cool-gray">{formattedPrice}</p>
        </div>
      </CardContent>
    </Card>
  );
}
