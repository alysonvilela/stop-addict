import {  useEffect, useState } from "react";
import { useAddictStore } from "../../store/addict-store";

export const useMapViewModel = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const add = useAddictStore(state => state.add)
  const use = useAddictStore(state => state.use)
  const data = useAddictStore(state => ({
    used: state.used_slots.length,
    max: state.max_amount_slots
  }))

  const onUse = (id: string) => {
    setSelectedId(id);
  };

  const onCloseModal = () => {
    setSelectedId(null);
  };

  const onConfirmUse = () => {
    use(selectedId!) 
    setSelectedId(null)
  }

  const onSetting = () => {

  }

  useEffect(() => {
    add('OWNER_ID')
  }, [add])

  return {
    handlers: {
      onCloseModal,
      onConfirmUse,
      onUse,
      onSetting
    },
    states: {
      data,
      selectedId,
    },
  };
};
