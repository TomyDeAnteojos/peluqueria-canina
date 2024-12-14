/*
*
! GALERIA
*
*/
const images = Array.from({ length: 15 }, (_, i) => `d${i + 1}.webp`);

const galleryContainer = document.getElementById('gallery-container');
const loadMoreButton = document.getElementById('load-more-button');
let currentIndex = 0;
const imagesPerLoad = 10;

function loadImages() {
  const nextIndex = Math.min(currentIndex + imagesPerLoad, images.length);
  for (let i = currentIndex; i < nextIndex; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = `https://shiny-sfogliatella-a7500f.netlify.app/dog/${images[i]}`;
    imgElement.alt = `Imagen de perro ${images[i]}`;

    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.appendChild(imgElement);

    galleryContainer.appendChild(galleryItem);
  }

  currentIndex = nextIndex;

  if (currentIndex >= images.length) {
    loadMoreButton.style.display = 'none';
  }
}

loadMoreButton.addEventListener('click', loadImages);

loadImages();

/*
*
! CATALOGO
*
*/

const products = [
    { id: 1, name: "Chapitas", description: "Chapitas", price: 5500, category: "accesories", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a1.webp" },
    { id: 2, name: "Bebedor chico", description: "Bebedor chico", price: 5000, category: "foot", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a2.webp" },
    { id: 3, name: "Pipetas", description: "de 2-10: $2500 | 10-25:2500 | 20-40:3000", price: "2500 - 3000", category: "salud", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a3.webp" },
    { id: 4, name: "Bebedor grande", description: "Bebedor grande", price: 6000, category: "foot", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a4.webp" },
    { id: 5, name: "Kit sanitario", description: "Kit sanitario", price: 4500, category: "salud", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a5.webp" },
    { id: 6, name: "Shampoo Antipulgas", description: "Elimina pulgas y garrapatas", price: 400, category: "shampoo", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a6.webp" },
    { id: 7, name: "Pipeta", description: "10 kg $4500 | 20 kg 5600 | 40 kg 6700", price: "4500 - 6700", category: "food", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a7.webp" },
    { id: 8, name: "Correa", description: "Correa para perros", price: 300, category: "accesories", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a8.webp" },
    { id: 9, name: "Collar", description: "Collar para perros", price: 800, category: "accesories", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a9.webp" },
    { id: 10, name: "Ropa para Perros", description: "Estilo y comodidad", price: 200, category: "accesories", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a10.webp" },
    { id: 11, name: "pipeta", description: "pipeta para gato", price: 4000, category: "salud", image: "https://shiny-sfogliatella-a7500f.netlify.app/art/a4.webp" },
  ];

  const catalogGrid = document.getElementById("catalogGrid");
  const priceFilter = document.getElementById("priceFilter");
  const productDetails = document.getElementById("productDetails");
  const detailsImage = document.getElementById("detailsImage");
  const detailsName = document.getElementById("detailsName");
  const detailsDescription = document.getElementById("detailsDescription");
  const detailsPrice = document.getElementById("detailsPrice");
  const buyButton = document.getElementById("buyButton");

  function renderProducts() {
    const priceValue = priceFilter.value;
    catalogGrid.innerHTML = "";

    const filteredProducts = products.filter(product => {
      return priceValue === "all" ||
        (priceValue === "low" && product.price < 1000) ||
        (priceValue === "medium" && product.price >= 1000 && product.price <= 2500) ||
        (priceValue === "high" && product.price > 2500);
    });

    filteredProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price}</p>
      `;
      productCard.addEventListener("click", () => showProductDetails(product));
      catalogGrid.appendChild(productCard);
    });
  }

  function showProductDetails(product) {
    detailsImage.src = product.image;
    detailsName.textContent = product.name;
    detailsDescription.textContent = product.description;
    detailsPrice.textContent = `Precio: $${product.price}`;
    buyButton.onclick = () => {
      window.open(`https://wa.me/5491123822819?text=Hola%20estoy%20interesado%20en%20comprar%20${encodeURIComponent(product.name)}`, "_blank");
    };
    productDetails.style.display = "block";
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  priceFilter.addEventListener("change", renderProducts);
  renderProducts();

/*
*
! CONTACTO
*
*/

function updateStatusButton() {
    const statusButton = document.getElementById("statusButton");
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();

    if (day >= 1 && day <= 6 && (hour > 9 || (hour === 9 && minute >= 0)) && (hour < 18 || (hour === 18 && minute === 0))) {
      statusButton.textContent = "Abierto (con turno)";
      statusButton.style.backgroundColor = "green";
      statusButton.style.color = "white";
    } else {
      statusButton.textContent = "Cerrado";
      statusButton.style.backgroundColor = "red";
      statusButton.style.color = "white";
    }
  }

  document.addEventListener("DOMContentLoaded", updateStatusButton);

/*
*
! INDEX
*
*/