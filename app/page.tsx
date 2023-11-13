"use client";

import React from "react";
import Step from "@/components/Step";
import PersonalInfo from "@/components/sections/PersonalInfo";
import Plan from "@/components/sections/Plan";
import useStore from "@/store/useStore";
import Addons from "@/components/sections/Addons";
import Summary from "@/components/sections/Summary";

export default function Home() {
  const { step } = useStore((state) => state);

  return (
    <main>
      <section className="relative h-[172px] w-full bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover lg:hidden">
        <div className="flex justify-center pt-[37px] pb-[34px]">
          <Step stepNumber={1} />
          <Step stepNumber={2} />
          <Step stepNumber={3} />
          <Step stepNumber={4} />
        </div>
      </section>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <Plan />}
      {step === 3 && <Addons />}
      {step === 4 && <Summary />}
    </main>
  );
}
