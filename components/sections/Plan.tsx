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
      month: {
        price: 9,
        type: "Monthly",
      },
      yearly: {
        price: 90,
        trails: "2 months free",
        type: "Yearly",
      },
    },
  },
  {
    id: 2,
    name: "Advanced",
    subscription: {
      month: {
        price: 12,
        type: "Monthly",
      },
      yearly: {
        price: 120,
        trails: "2 months free",
        type: "Yearly",
      },
    },
  },
  {
    id: 3,
    name: "Pro",
    subscription: {
      month: {
        price: 15,
        type: "Monthly",
      },
      yearly: {
        price: 150,
        trails: "2 months free",
        type: "Yearly",
      },
    },
  },
];

export default function Plan() {
  const { formData, setFormData } = useStore();
  const [selectedPlan, setSelectedPlan] = useState(formData.plan);

  useEffect(() => {
    setFormData({ ...formData, plan: selectedPlan });
  }, [selectedPlan]);

  const onNext = () => {
    if (!selectedPlan?.id) return;

    setFormData({
      ...formData,
      step: formData.step + 1,
    });
  };
  const onPrevious = () => {
    setFormData({ ...formData, step: formData.step - 1 });
  };

  const handleOnClick = (plan: any) => {
    setSelectedPlan({
      ...selectedPlan,
      id: plan.id,
      name: plan.name,
      price: formData.isToggled
        ? plan.subscription.yearly.price
        : plan.subscription.month.price,
      type: formData.isToggled
        ? plan.subscription.yearly.type
        : plan.subscription.month.type,
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
              plan={plan}
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
