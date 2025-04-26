const countries = ["Argentina", "Armenia", "greece", "brazil", "austria", "dominica", "switzerland", "Belgium", "Iran", "Spain", "Denmark", "Germany", "ireland"];

function renderCountries(list) {
  while (list.length > 0) {
    list.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    const firstChar = list[0][0].toUpperCase();
    const items = list.filter((item) => item[0].toUpperCase() === firstChar);
    const template = `<h2>${firstChar} (${items.length})</h2>`;
    const listItems = items.map((item) => `<li>${item}</li>`).join("");
    const html = `<ul>${listItems}</ul>`;

    document.body.innerHTML += template;
    document.body.innerHTML += html;

    list.splice(0, items.length);
  }
}

renderCountries(countries);
