export const getCurrentDate = () => {
  const date = new Date().toLocaleDateString();
  const splitedDate = date.split("/").reverse();
  const month =
    splitedDate[1].length === 1 ? `0${splitedDate[1]}` : splitedDate[1];
  return `${splitedDate[0]}-${month}-${splitedDate[2]}`;
};
