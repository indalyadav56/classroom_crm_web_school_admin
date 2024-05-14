import { create } from "zustand";

type Store = {
  getAllStudents: () => Promise<any>;
  addStudent: () => Promise<any>;
};

const useStudentStore = create<Store>()((set) => ({
  getAllStudents: async () => {},
  addStudent: async () => {},
}));
