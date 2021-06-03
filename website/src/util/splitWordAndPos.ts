const splitWordAndPos = (sense: string) => {
  const [rawWord, pos] = sense.split("|");
  const word = rawWord
    .replace(/_/gi, " ")
    .replace("&amp;", "&")
    .replace("&amp;", "&")
    .replace("&amp", "&");
  return { word, pos };
};

export default splitWordAndPos;
