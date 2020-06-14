export const getRandomNumber = () => Math.floor(Math.random() * 100);

export const getDivArray = (num) => {
  const arr = [1];
  if (!num) {
    return arr;
  }
  const checkArrElem = (numer, del) => {
    if (numer === 1) {
      return arr;
    }
    const mod = numer % del;
    if (!mod) {
      arr.push(del);
      return checkArrElem(numer / del, del);
    }
    return checkArrElem(numer, del + 1);
  };
  return checkArrElem(num, 2);
};
