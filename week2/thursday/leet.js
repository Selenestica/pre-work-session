function leetSpeak(string) {
  const lowerString = string.toLowerCase();
  const stringArr = [];
  for (let i = 0; i < lowerString.length; i++) {
    if (lowerString[i] === "a") {
      stringArr.push("4");
    } else if (lowerString[i] === "e") {
      stringArr.push("3");
    } else if (lowerString[i] === "g") {
      stringArr.push("6");
    } else if (lowerString[i] === "i") {
      stringArr.push("1");
    } else if (lowerString[i] === "o") {
      stringArr.push("0");
    } else if (lowerString[i] === "s") {
      stringArr.push("5");
    } else if (lowerString[i] === "t") {
      stringArr.push("7");
    } else {
      stringArr.push(lowerString[i]);
    }
  }
  const newString = stringArr.join("");
  console.log(newString);
}

leetSpeak("i am elite!");
