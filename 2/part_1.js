const data = require("./data");

const containsLetterAppearingTwiceOrThrice = s => {
  const letterCounts = Object.values(
    s.split("").reduce((acc, char) => {
      return {
        ...acc,
        [char]: acc[char] === undefined ? 1 : acc[char] + 1,
      };
    }, {})
  );

  return [letterCounts.includes(2) ? 1 : 0, letterCounts.includes(3) ? 1 : 0];
};

const [twiceCount, thriceCount] = data.reduce(
  ([runningTwiceCount, runningThriceCount], string) => {
    const [twice, thrice] = containsLetterAppearingTwiceOrThrice(string);
    return [runningTwiceCount + twice, runningThriceCount + thrice];
  },
  [0, 0]
);

console.log(twiceCount * thriceCount);
