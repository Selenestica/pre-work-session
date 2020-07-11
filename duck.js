const numArray = [2, 5, 1, 4, 3, 4, 2, 6, 7];

const newArray = numArray.map((num) => {
  num = num + 1 + "hey";
  return num;
});

console.log(newArray);

console.log(numArray);
