import React from "react";
import SectionHeader from "../SectionHeader";
import Container from "../Container";
import AddonCard from "../AddonCard";
import useStore from "@/store/useStore";
import Footer from "../Footer";

const addOns = [
  {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    subscription: {
      monthly: {
        price: 1,
        type: "month",
      },
      yearly: {
        price: 10,
        type: "yearly",
      },
    },
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    subscription: {
      monthly: {
        price: 2,
        type: "month",
      },
      yearly: {
        price: 20,
        type: "yearly",
      },
    },
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme to your profile",
    subscription: {
      monthly: {
        price: 2,
        type: "month",
      },
      yearly: {
        price: 20,
        type: "yearly",
      },
    },
  },
];

export default function Addons() {
  const { step, increaseStep, decreaseStep } = useStore((state) => state);

  const onNext = () => {
    increaseStep(step);
  };

  const onPrevious = () => {
    decreaseStep(step);
  };

  return (
    <Container>
      <SectionHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <section className="mt-[22px] flex flex-col gap-4">
        {addOns.map((addon) => (
          <AddonCard key={addon.id} addOn={addon} />
        ))}
      </section>
      <Footer
        className="fixed -bottom-40 left-0 lg:static"
        onHandleNextStep={onNext}
        onHandlePreviousStep={onPrevious}
      />
    </Container>
  );
}
