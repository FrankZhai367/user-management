// create a store for user using pinia
import { defineStore } from "pinia";

// TODO
type UserDTO = {
  name: string;
};

export const useUserStore = defineStore("user", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
});
