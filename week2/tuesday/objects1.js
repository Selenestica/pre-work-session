const numArr = [1, 5, 5, 3, 5, 3, 3, 3, 3, 5];
let most = 0;
let frequency = 1;
let item;

for (let i = 0; i < numArr.length; i++) {
  for (let z = 0; z < numArr.length; z++) {
    if (numArr[i] === numArr[z]) most++;
    if (frequency < most) {
      frequency = most;
      item = numArr[i];
    }
  }

  most = 0;
}

console.log(item + ": " + frequency + " times");
