import { create } from "zustand";

type Store = {
  getAllTeachers: () => Promise<any>;
};

export const useTeacherStore = create<Store>()((set) => ({
  getAllTeachers: async () => {},
}));
