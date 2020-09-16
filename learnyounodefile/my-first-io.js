const fs = require("fs");

const fileStr = fs.readFileSync(process.argv[2]).toString();

const fileArrs = fileStr.split("\n");

console.log(fileArrs.length - 1);
