const numArray = [2, 5, 1, 4, 3, 4, 2, 6, 7];

const newArray = numArray.map((i) => {
  i += 1;
  return i;
});

console.log(newArray);

console.log(numArray);
