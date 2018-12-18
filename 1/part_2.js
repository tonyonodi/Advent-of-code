const data = require("./data");

let currentFreq = 0;
let results = new Set([0]);

for (let index = 0; true; index += 1) {
  const change = data[index % data.length];
  const newFreq = currentFreq + change;
  if (results.has(newFreq)) {
    console.log(newFreq);
    break;
  }
  currentFreq = newFreq;
  results.add(currentFreq);
}
