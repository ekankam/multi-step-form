"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Step from "@/components/Step";
import PersonalInfo from "@/components/sections/PersonalInfo";
import Plan from "@/components/sections/Plan";
import useStore from "@/store/useStore";
import Addons from "@/components/sections/Addons";
import Summary from "@/components/sections/Summary";

export default function Home() {
  const {
    formData: { step, plan, isToggled },
  } = useStore();

  console.log({ plan, isToggled });

  return (
    <main className="h-full relative">
      <section className="relative h-[172px] w-full bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover lg:hidden">
        <div className="flex justify-center pt-[37px] pb-[34px]">
          <Step stepNumber={1} />
          <Step stepNumber={2} />
          <Step stepNumber={3} />
          <Step stepNumber={4} />
        </div>
      </section>
      <section className="bg-c-neutral-white w-[343px] lg:flex lg:w-[940px] rounded-[15px] c-shadow absolute top-[103px] lg:static lg:mx-auto left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:mt-[103px] lg:p-4 min-h-[376px] lg:min-h-[600px]">
        <Sidebar />
        {step === 1 && <PersonalInfo />}
        {step === 2 && <Plan />}
        {step === 3 && <Addons />}
        {step === 4 && <Summary />}
      </section>
    </main>
  );
}
