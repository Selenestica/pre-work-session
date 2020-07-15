const nameArr = ["Joseph", "Benjamin", "Wilson"];
let initials = "";

for (let name = 0; name < nameArr.length; name++) {
  let letter = nameArr[name][0];
  initials += letter;
}

console.log(initials);
