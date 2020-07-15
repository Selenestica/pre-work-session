const numArr = [1, 4, 7, 23, 54];
let biggest = 0;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > biggest) {
    biggest = numArr[i];
  }
}

console.log(biggest);
