import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative h-[172px] w-full md:hidden">
        <Image src="/images/bg-sidebar-mobile.svg" alt="background" fill />
      </div>
      <div className="bg-c-neutral-white h-20 w-[343px] lg:w-[940px] rounded-[15px] c-shadow absolute top-[103px] lg:static lg:mx-auto left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:mt-[103px] px-4 py-8 lg:p-4 min-h-[376px] lg:min-h-[600px]">
        hello
      </div>
    </main>
  );
}
