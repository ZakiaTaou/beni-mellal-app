import { create } from "zustand";
import { fetchAttractions } from "../services/api";

export const useAttractionsStore = create((set) => ({
  attractions: [],
  getAttractions: async () => {
    const data = await fetchAttractions();
    set({ attractions: data });
  },

}));