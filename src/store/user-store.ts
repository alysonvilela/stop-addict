import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface User {
  id: string;
  name: string;
  created_at: null | string;
}

interface State {
  user: User | null;
}
interface Actions {
  set: (name: string) => void;
  update: (user: User) => void;
}

const initialState: State = {
  user: null,
};

export const useUserStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,

      set: (name) => {
        set({
          user: {
            name,
            id: v4(),
            created_at: new Date().toISOString(),
          },
        });
      },

      update: (user) => {
        set({
          user,
        });
      },
    }),
    {
      name: "user",
    }
  )
);
