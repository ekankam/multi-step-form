import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import Container from "../Container";
import useStore from "@/store/useStore";
import Footer from "../Footer";
import PlanCard from "../PlanCard";
import Filter from "../Filter";

const plans = [
  {
    id: 1,
    name: "Arcade",
    subscription: {
      monthly: {
        price: 9,
        type: "monthly",
      },
      yearly: {
        price: 90,
        trails: "2 months free",
        type: "yearly",
      },
    },
  },
  {
    id: 2,
    name: "Advanced",
    subscription: {
      monthly: {
        price: 12,
        type: "monthly",
      },
      yearly: {
        price: 120,
        trails: "2 months free",
        type: "yearly",
      },
    },
  },
  {
    id: 3,
    name: "Pro",
    subscription: {
      monthly: {
        price: 15,
        type: "monthly",
      },
      yearly: {
        price: 150,
        trails: "2 months free",
        type: "yearly",
      },
    },
  },
];

export default function Plan() {
  const { plan, setPlan, isToggled, step, increaseStep, decreaseStep } =
    useStore((state) => state);
  const [selectedPlan, setSelectedPlan] = useState(plan);

  useEffect(() => {
    setPlan({
      ...plan,
      ...selectedPlan,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan]);

  const onNext = () => {
    if (!selectedPlan?.id || !plan.name) return;
    increaseStep(step);
  };

  const onPrevious = () => {
    decreaseStep(step);
  };

  const handleOnClick = (plan: any) => {
    setSelectedPlan({
      ...selectedPlan,
      id: plan.id,
      name: plan.name,
      price: isToggled
        ? plan.subscription.yearly.price
        : plan.subscription.monthly.price,
      type: isToggled
        ? plan.subscription.yearly.type
        : plan.subscription.monthly.type,
    });
  };

  return (
    <Container className="flex justify-between flex-col">
      <div>
        <SectionHeader
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />
        <section className="flex flex-col gap-3 lg:flex-row lg:gap-4 w-full">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              onClick={() => handleOnClick(plan)}
              item={plan}
            />
          ))}
        </section>
        <Filter />
      </div>
      <Footer
        className="fixed -bottom-40 left-0 lg:static"
        onHandleNextStep={onNext}
        onHandlePreviousStep={onPrevious}
      />
    </Container>
  );
}
