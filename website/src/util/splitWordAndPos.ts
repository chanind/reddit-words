const splitWordAndPos = (sense: string) => {
  const [word, pos] = sense.split("|");
  return { word, pos };
};

export default splitWordAndPos;
