const products = [
  {
    title: "Yamaha C5X-SH3 Silent Grand Piano",
    price: "48,815.00",
    image: "./assets/images/C5X.png",
    description:
      "The perfect mid-sized performance piano, at 6’7” it will fit nicely into small halls or slightly larger homes. It is also available with the SH3 silencing system, making it ideal for practicing at any time.",
  },
  {
    title: "Yamaha DU1 Disklavier Upright Piano",
    price: "19,083.00",
    image: "./assets/images/DU1.png",
    description:
      "With a well-balanced, responsive touch and medium, mellow tone, this Yamaha U1 features the latest Disklavier Enspire technology, activated by turning on the discreet box placed under the piano.",
  },
  {
    title: "Yamaha YUS3 Upright Piano",
    price: "16,188.00",
    image: "./assets/images/YUS3.png",
    description:
      "This new Yamaha YUS3 Upright Piano is a refined version of the U3 with custom-made mahogany hammers covered in special refined lambs wool that hit hand wound bass strings providing excellent projection.",
  },
  {
    title: "Yamaha CLP-885 Digital Piano",
    price: "4,100.00",
    image: "./assets/images/CLP-885.png",
    description:
      "The Yamaha CLP-885 Digital Piano offers cutting-edge features and superior sound quality, including CFX and Bösendorfer Imperial piano samples with binaural sampling.",
  },
  {
    title: "Yamaha U1-SH3 Upright Piano",
    price: "11,999.00",
    image: "./assets/images/U1-SH3.png",
    description:
      "This new Yamaha U1-SH3 Silent Upright Piano is a more versatile version of the popular U1 model, allowing players to practice in silence so as not to disturb their nearest and dearest.",
  },
  {
    title: "Yamaha U3-TA3 Transacoustic Piano",
    price: "14,999.00",
    image: "./assets/images/U3-TA3.png",
    description:
      "This new Yamaha U3 Transacoustic Upright Piano adds a new dimension to the popular U3 model, using the soundboard as a loudspeaker and including 20 instrument voices.",
  },
];

function renderProducts(items) {
  const html = items
    .map(
      (item) => `
      <div class="product-card" data-price="${item.price}">
        <img src="${item.image}" alt="${item.title}">
        <div class="product-info">
          <h2>${item.title}</h2>
          <span class="price">${item.price}</span>
          <p>${item.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `
    )
    .join("");
  document.getElementById("products").innerHTML = html;
}

renderProducts(products);

function filterProducts() {
  const value = document.getElementById("priceSelect").value;
  let filtered;

  if (value === "") {
    filtered = products;
  } else {
    filtered = products.filter((item) => {
      return item.price <= value;
    });
  }

  renderProducts(filtered);
}
