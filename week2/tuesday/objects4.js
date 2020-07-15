const numArr = [-1, 5, -25, -3, 99, 20];

let negs = 0;
let poss = 0;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > 0) {
    poss += 1;
  } else if (numArr[i] < 0) {
    negs += 1;
  }
}

console.log("positives: " + poss + "\n" + "negatives: " + negs);
