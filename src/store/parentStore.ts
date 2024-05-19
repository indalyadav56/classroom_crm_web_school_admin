import { create } from "zustand";

type Store = {
  getAllParents: () => Promise<any>;
};

export const useParentStore = create<Store>()((set) => ({
  getAllParents: async () => {},
}));
