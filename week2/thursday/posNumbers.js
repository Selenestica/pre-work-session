const arr = [3, 4, 6, -2, -1];

const posArray = arr.map((num) => {
  if (num > 0) {
    return num;
  } else {
    return;
  }
});

//console.log(posArray);

const filteredArr = arr.filter((num) => {
  return num > 0;
});

console.log(filteredArr);
