import { useEffect, useState } from "react";
import { useAddictStore } from "../../store/addict-store";
import { useUserStore } from "../../store/user-store";

export const useMapViewModel = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const add = useAddictStore((state) => state.add);
  const use = useAddictStore((state) => state.use);
  const userId = useUserStore((state) => state.user?.id);

  const onUse = (id: string) => {
    setSelectedId(id);
  };

  const onCloseModal = () => {
    setSelectedId(null);
  };

  const onConfirmUse = () => {
    use(selectedId!);
    setSelectedId(null);
  };

  const onSetting = () => {};

  useEffect(() => {
    if (userId) {
      add(userId);
    }
  }, [add, userId]);

  return {
    handlers: {
      onCloseModal,
      onConfirmUse,
      onUse,
      onSetting,
    },
  };
};
