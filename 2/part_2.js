const data = require("./data");

const stringLength = data[0].length;

const diffCountIs1 = (s1, s2) => {
  const a1 = s1.split("");
  const a2 = s2.split("");

  let diffCount = 0;
  for (let i = 0; i < stringLength; i += 1) {
    const charactersIdentical = a1[i] === a2[i];
    diffCount += charactersIdentical ? 0 : 1;
    if (diffCount > 1) return false;
  }
  return diffCount === 1;
};

const [s1, s2] = data.reduce((found, s1, index, array) => {
  if (found) return found;

  const restOfArray = array.slice(index + 1);
  const match = restOfArray.find(s2 => {
    return diffCountIs1(s1, s2);
  });

  return match === undefined ? false : [s1, match];
}, false);

const commonLetters = s1.split("").reduce((string, char, index) => {
  const s2char = s2[index];
  return string + (char === s2char ? char : "");
}, "");

console.log(commonLetters);
