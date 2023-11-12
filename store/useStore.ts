import { create } from "zustand";
import { PersonalInfoSlice } from "./slices/createPersonalInfoSlice";
import { PlanSlice } from "./slices/createPlanSlice";
import { AddOnSlice } from "./slices/createAddOnSlice";
import { ToggleSubcriptionPlanSlice } from "./slices/createToggleSubscriptionPlan";
import {
  createPersonalInfoSlice,
  createPlanSlice,
  createAddOnSlice,
  createToggleSubscriptionPlan,
  createStepSlice,
} from "./slices";
import { StepSlice } from "./slices/createStepSlice";

const useStore = create<
  PersonalInfoSlice &
    PlanSlice &
    AddOnSlice &
    ToggleSubcriptionPlanSlice &
    StepSlice
>()((...a) => ({
  ...createPersonalInfoSlice(...a),
  ...createPlanSlice(...a),
  ...createAddOnSlice(...a),
  ...createToggleSubscriptionPlan(...a),
  ...createStepSlice(...a),
}));

export default useStore;
