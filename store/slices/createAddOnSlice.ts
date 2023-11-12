import { StateCreator } from "zustand";

type AddOn = {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
};

type AddOnSlice = {
  selectedAddOns: AddOn[];
  toggleAddOn: (addOn: AddOn) => void;
  unToggledAddOn: (AddOnId: number) => void;
};

const createAddOnSlice: StateCreator<AddOnSlice> = (set) => ({
  selectedAddOns: [],
  toggleAddOn: (addOn) =>
    set((state) => ({ selectedAddOns: state.selectedAddOns.concat(addOn) })),
  unToggledAddOn: (addOnId) =>
    set((state) => ({
      selectedAddOns: state.selectedAddOns.filter((c) => c.id !== addOnId),
    })),
});

export default createAddOnSlice;
export type { AddOn, AddOnSlice };
