import { StateCreator } from "zustand";

type StepSlice = {
  step: number;
  increaseStep: (step: number) => void;
  decreaseStep: (step: number) => void;
};

const createStepSlice: StateCreator<StepSlice> = (set) => ({
  step: 1,
  increaseStep: (step) => set((state) => ({ ...state, step: step + 1 })),
  decreaseStep: (step) => set((state) => ({ ...state, step: step - 1 })),
});

export default createStepSlice;
export type { StepSlice };
