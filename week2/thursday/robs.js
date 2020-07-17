function leetspeak(changeIt) {
  const lowChange = changeIt.toUpperCase();
  const newString = [];
  for (var i = 0; i < lowChange.length; i++) {
    var x = lowChange[i];
    if (x === "A" || x === "B" || x === "C" || x === "D") {
      newString.push("4");
    } else if (x === "E" || x === "F") {
      newString.push("3");
    } else if (x === "G" || x === "H") {
      newString.push("6");
    } else if (
      x === "I" ||
      x === "J" ||
      x === "K" ||
      x === "L" ||
      x === "M" ||
      x === "N"
    ) {
      newString.push("1");
    } else if (x === "O" || x === "P" || x === "Q" || x === "R") {
      newString.push("0");
    } else if (x === "S") {
      newString.push("5");
    } else if (
      x === "T" ||
      x === "U" ||
      x === "V" ||
      x === "W" ||
      x === "X" ||
      x === "Y" ||
      x === "Z"
    ) {
      newString.push("7");
    } else {
      newString.push(x);
    }
  }
  const newString2 = newString.join(" ");
  console.log(newString2);
}
leetspeak("I apple!");
