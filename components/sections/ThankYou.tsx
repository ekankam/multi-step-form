import Image from "next/image";
import React from "react";

export default function ThankYou() {
  return (
    <section className="flex flex-col items-center justify-center h-full text-center">
      <div className="relative w-14 h-14 mb-6">
        <Image
          src="/images/icon-thank-you.svg"
          alt="checkmark inside a circle"
          fill
        />
      </div>
      <h3 className="text-2xl lg:text-[32px] text-c-primary-marine-blue mb-[9px]">
        Thank you!
      </h3>
      <p className="text-c-neutral-cool-gray text-base">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
}
