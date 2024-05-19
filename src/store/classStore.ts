import { create } from "zustand";

type Store = {
  getAllClasses: () => Promise<any>;
};

export const useClassStore = create<Store>()((set) => ({
  getAllClasses: async () => {},
}));
