import { create } from "zustand";

type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

type Plan = {
  id: number;
  name: string;
  price: number;
  type: string;
};

type FormData = {
  step: number;
  isToggled: boolean;
  personalInfo: PersonalInfo;
  plan: Plan;
};

type Store = {
  formData: FormData;
  step: number;
  isToggled: boolean;
  setFormData: (data: FormData) => void;
  handleToggled: (isToggled: boolean) => void;
};

const initialPersonalInfoState = {
  name: "",
  email: "",
  phone: "",
};

const initialPlanState = {
  id: 0,
  name: "",
  price: 0,
  type: "",
};

const useStore = create<Store>((set) => ({
  formData: {
    step: 1,
    personalInfo: initialPersonalInfoState,
    plan: initialPlanState,
    isToggled: false,
  },
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  step: 1,
  isToggled: false,
  handleToggled: () =>
    set((state) => ({
      formData: { ...state.formData, isToggled: !state.formData.isToggled },
    })),
}));

export default useStore;
