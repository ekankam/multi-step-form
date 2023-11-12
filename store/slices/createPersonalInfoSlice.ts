import { StateCreator } from "zustand";

type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

type PersonalInfoSlice = {
  personalInfo: PersonalInfo;
  setPersonalInfo: (data: PersonalInfo) => void;
};

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const createPersonalInfoSlice: StateCreator<PersonalInfoSlice> = (set) => ({
  personalInfo: initialState,
  setPersonalInfo: (data) =>
    set((state) => ({ personalInfo: { ...state.personalInfo, ...data } })),
});

export default createPersonalInfoSlice;
export type { PersonalInfo, PersonalInfoSlice };
