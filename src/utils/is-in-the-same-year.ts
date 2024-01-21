export const isInSameYear = (targetDate: Date): boolean => {
  const today = new Date();
  return today.getFullYear() === targetDate.getFullYear();
};
