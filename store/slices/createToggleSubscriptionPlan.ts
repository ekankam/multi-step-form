import { StateCreator } from "zustand";

type ToggleSubcriptionPlanSlice = {
  isToggled: boolean;
  toggleSubscriptionPlan: (isToggled: boolean) => void;
};

const createToggleSubscriptionPlan: StateCreator<ToggleSubcriptionPlanSlice> = (
  set
) => ({
  isToggled: false,
  toggleSubscriptionPlan: () =>
    set((state) => ({
      isToggled: !state.isToggled,
    })),
});

export default createToggleSubscriptionPlan;
export type { ToggleSubcriptionPlanSlice };
