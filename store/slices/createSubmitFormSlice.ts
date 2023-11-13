import { StateCreator } from "zustand";

type SubmitFormSlice = {
  isSubmitted: boolean;
  onSubmit: (isSubmitted: boolean) => void;
};

const createSubmitFormSlice: StateCreator<SubmitFormSlice> = (set) => ({
  isSubmitted: false,
  onSubmit: () =>
    set((state) => ({ ...state, isSubmitted: !state.isSubmitted })),
});

export default createSubmitFormSlice;
export type { SubmitFormSlice };
