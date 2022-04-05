export const convertToProperDate = (date) => {
  const localDate = new Date(date);
  return `${
    localDate.getDate() % 10 === localDate.getDate()
      ? "0" + localDate.getDate()
      : localDate.getDate()
  }/0${localDate.getMonth() + 1}/${localDate.getFullYear()}`;
};
