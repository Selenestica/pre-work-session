// this is an object
const address = {
  street: "main st.",
  city: "Houston",
  state: "Texas",
};

console.log(address);
console.log(address.city);

// this is an array of objects
const results = [
  {
    country: "usa",
    time: 23,
  },
  {
    country: "poland",
    time: 42,
  },
  {
    country: "canada",
    time: 12,
  },
];

for (let i = 0; i < results.length; i++) {
  console.log(results[i]);
  console.log(results[i].country);
}
