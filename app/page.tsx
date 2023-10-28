import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";
import Container from "../components/Container";
import Step from "@/components/Step";
import PersonalInfo from "@/components/sections/PersonalInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative h-full">
      <div className="relative h-[172px] w-full bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover lg:hidden">
        <div className="flex justify-center pt-[37px] pb-[34px]">
          <Step stepNumber={1} />
          <Step stepNumber={2} />
          <Step stepNumber={3} />
          <Step stepNumber={4} />
        </div>
      </div>
      <div className="bg-c-neutral-white w-[343px] lg:flex lg:w-[940px] rounded-[15px] c-shadow absolute top-[103px] lg:static lg:mx-auto left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:mt-[103px] lg:p-4 min-h-[376px] lg:min-h-[600px]">
        <Sidebar />
        <Container className="flex flex-col justify-between">
          <PersonalInfo />
          <Footer className="hidden lg:flex lg:p-0" stepNumber={1} />
        </Container>
      </div>
      <Footer className="absolute bottom-0 lg:hidden" stepNumber={2} />
    </main>
  );
}
