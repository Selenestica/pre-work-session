const string = "This is a random string XD";
const letterArr = [];

for (let i = 0; i < string.length; i++) {
  if (string[i] !== " ") {
    letterArr.push(string[i]);
  }
}

console.log(letterArr);
