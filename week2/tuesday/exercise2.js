const numArr = [0, 1, 1, 1, 1, 0];

let oneIndex;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] === 1) {
    oneIndex = i;
  }
}

console.log(oneIndex);
