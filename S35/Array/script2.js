const Countries = ["Germany", "Germany", "Spain", "Spain", "Denmark", "Denmark", "Switzerland", "Switzerland", "Belgium", "Belgium", "Iran", "Iran"];

const randomCountries = Countries.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});
console.log(randomCountries);
