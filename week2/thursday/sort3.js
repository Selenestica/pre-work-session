const arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6],
];

// const nums = [2, 5, 1];

// console.log(nums.sort());

const sumObj = {};

const sortedArrays = arr.map((arr) => {
  let x = 0;
  let sum = arr.forEach((num, index) => {
    x += num;
    sumObj.num = x;
  });
  console.log(x);
  console.log(sumObj);
});

const reducer = (acc, cur) => acc + cur;

const letters = [3, 3, 3];
console.log(letters.reduce(reducer));

letters.sort();
