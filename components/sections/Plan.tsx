import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import Container from "../Container";
import useStore from "@/store/useStore";
import PlanCard from "../PlanCard";
import Filter from "../Filter";
import { plans } from "@/data";

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
    <Container onNext={onNext} onPreviousStep={onPrevious}>
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
    </Container>
  );
}
