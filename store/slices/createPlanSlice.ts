import { StateCreator } from "zustand";

type Plan = {
  id: number;
  name: string;
  price: number;
  type: string;
};

type PlanSlice = {
  plan: Plan;
  setPlan: (plan: Plan) => void;
};

const initialState = {
  id: 0,
  name: "",
  price: 0,
  type: "",
};

const createPlanSlice: StateCreator<PlanSlice> = (set) => ({
  plan: initialState,
  setPlan: (data) => set((state) => ({ plan: { ...state.plan, ...data } })),
});

export default createPlanSlice;
export type { Plan, PlanSlice };
