import { getAllStudents } from "@/api/studentApi";
import { create } from "zustand";

type Store = {
  getAllStudents: () => Promise<any>;
  addStudent: () => Promise<any>;
};

export const useStudentStore = create<Store>()((set) => ({
  getAllStudents: async () => {},
  addStudent: async () => {},
}));
