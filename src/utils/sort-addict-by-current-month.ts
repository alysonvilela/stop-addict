import { Addict } from "../store/addict-store";

export const sortAddictByCurrentMonth = (a: Addict, b: Addict) => {
  const aMonth = a.deleted_at ? new Date(a.deleted_at).getMonth() : -1;
  const bMonth = b.deleted_at ? new Date(b.deleted_at).getMonth() : -1;

  if (aMonth < bMonth) {
    return -1;
  } else if (aMonth > bMonth) {
    return 1;
  } else {
    const aDay = a.deleted_at ? new Date(a.deleted_at).getDate() : -1;
    const bDay = b.deleted_at ? new Date(b.deleted_at).getDate() : -1;

    if (aDay < bDay) {
      return -1;
    } else if (aDay > bDay) {
      return 1;
    } else {
      return 0;
    }
  }
};
