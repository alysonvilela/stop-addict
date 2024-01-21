import { v4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { isInSameYear } from "../utils/is-in-the-same-year";
export interface Addict {
  id: string;
  owner_id: string;
  created_at: null | string;
  deleted_at: null | string;
}
interface State {
  available_slots: Addict[];
  used_slots: Addict[];
  max_amount_slots: number;
  last_used_at: string | null;
  started_at: string;
}
interface Actions {
  add: (owner_id: string) => void;
  use: (id: string) => void;
  forceReset: () => void;
}

const initialState: State = {
  available_slots: [],
  used_slots: [],
  max_amount_slots: 10,
  last_used_at: null,
  started_at: new Date().toISOString(),
};

interface MakeSlotParams {
  ownerId: string;
}

const makeSlot = ({ ownerId }: MakeSlotParams): Addict => {
  return {
    id: v4(),
    owner_id: ownerId,
    created_at: new Date().toISOString(),
    deleted_at: null,
  };
};

export const useAddictStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,

      add: (ownerId) => {
        const lastUse = get().last_used_at!;

        if (!isInSameYear(new Date(lastUse)) || !lastUse) {
          console.log('run add')
          set((old) => {
            const max = old.max_amount_slots;
            const newSlots = [...Array(max)].map(() => makeSlot({ ownerId }));

            return {
              ...old,
              available_slots: newSlots,
              used_slots: [...old.used_slots],
              max_amount_slots: old.max_amount_slots,
            };
          });
        }
      },

      use: (id) => {
        set((old) => {
          const slotIdx = old.available_slots.findIndex((i) => i.id === id);

          if (slotIdx > -1) {
            const oldAvailable = old.available_slots;
            const removed = old.available_slots.splice(slotIdx, 1);

            const todayDate = new Date().toISOString();
            removed[0].deleted_at = todayDate;

            return {
              ...old,
              available_slots: [...oldAvailable],
              used_slots: [...old.used_slots, ...removed],
              last_used_at: todayDate,
            };
          }
          return { ...old };
        });
      },

      forceReset: () => {
        set({
          ...initialState,
        });
      },
    }),
    {
      name: "addicts",
    }
  )
);
