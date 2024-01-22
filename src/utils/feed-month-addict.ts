import { Addict } from "../store/addict-store";

export const filterAddictByCurrentMonth = (i: Addict) => {
  const current = new Date();
  const currentMo = current.getMonth();
  const currentYear = current.getFullYear();

  const itemDate = new Date(i.deleted_at!);

  return (
    i.deleted_at &&
    itemDate.getMonth() === currentMo &&
    itemDate.getFullYear() === currentYear
  );
};

export const sortAddictByRecent = (a: Addict, b: Addict) => {
  const deletedAtA = a.deleted_at ? new Date(a.deleted_at) : null;
  const deletedAtB = b.deleted_at ? new Date(b.deleted_at) : null;

  if (deletedAtA === null && deletedAtB === null) {
    return 0;
  }

  if (deletedAtA === null) {
    return 1;
  }

  if (deletedAtB === null) {
    return -1;
  }

  return deletedAtB.getTime() - deletedAtA.getTime();
};

export const feedMonthAddict = (arr: Addict[]) => {
  return arr.filter(filterAddictByCurrentMonth).sort(sortAddictByRecent);
};
