import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TStepOneData = {
  name: string;
  email: string;
  phone: string;
};

const stepVariant = {
  1: "stepOne",
  2: "stepTwo",
  3: "stepThree",
};

type TSetDataType = { step: 1; data: TStepOneData };

const useStore = create<{
  stepOne: TStepOneData | null;
  setData: ({ step, data }: TSetDataType) => void;
}>((set) => ({
  stepOne: null,
  setData: ({ step, data }) =>
    set((state) => ({ ...state, [stepVariant[step]]: data })),
}));

//   data: initialFormData,
//   step: 1,
//   setData: (values: any) =>
//     set(() => ({ data: { ...state.data, ...values } })),
//   handleNextStep: (x: number) => set((state) => ({ step: state.step + x })),
//   handleBackStep: (x: number) => set((state) => ({ step: state.step - x })),

export default useStore;
