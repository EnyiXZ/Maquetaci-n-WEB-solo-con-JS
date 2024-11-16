const app = document.getElementById("app");


const header = document.createElement("header");

const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");

const logoImg = document.createElement("img");
logoImg.src = "img/logo-azul-marino-viajes.jpg"; 
logoImg.alt = "Azul Marino Viajes";
logoDiv.appendChild(logoImg);
header.appendChild(logoDiv);

const nav = document.createElement("nav");
const navList = document.createElement("ul");
const menuItems = ["Inicio", "Nosotros", "Servicios", "Contacto"];
menuItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = item;
  li.appendChild(a);
  navList.appendChild(li);
});

nav.appendChild(navList);
header.appendChild(nav);
app.appendChild(header);


const mainContent = document.createElement("div");
mainContent.classList.add("main-content");

const mainImage = document.createElement("img");
mainImage.src = "img/articulos-808572.jpg";
mainImage.alt = "Imagen principal de la sección";
mainContent.appendChild(mainImage);

const textContent = document.createElement("div");
textContent.classList.add("text-content");

const title = document.createElement("h2");
title.textContent = "Este es el titular del div de texto";
textContent.appendChild(title);

const paragraph = document.createElement("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non luctus nisi. Vivamus nec velit magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non luctus nisi. Vivamus nec velit magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non luctus nisi. Vivamus nec velit magna.";
textContent.appendChild(paragraph);

const button = document.createElement("a");
button.href = "#";
button.classList.add("button");
button.textContent = "Ver más";
textContent.appendChild(button);

mainContent.appendChild(textContent);
app.appendChild(mainContent);


const sectionTitle = document.createElement("h2");
sectionTitle.classList.add("section-title");
sectionTitle.textContent = "Este es el titular de la sección 2";
app.appendChild(sectionTitle);

const largeImage = document.createElement("img");
largeImage.src = "img/foto5.jpg";
largeImage.alt = "Imagen de la sección 2";
largeImage.classList.add("large-image");
app.appendChild(largeImage);

// Galería de imágenes
const gallery = document.createElement("div");
gallery.classList.add("image-gallery");

const galleryImages = [
  { src: "img/Viajes_Donde_Viajes_3.jpg", alt: "Imagen 1", title: "Conocer" },
  { src: "img/kayak-valencia.jpeg", alt: "Imagen 2", title: "Conocer" },
  { src: "img/600x400_viajes-lujo-FOTO-1-White-Dessert-experiencia-Polo-Norte-en-jet-privaso.jpg", alt: "Imagen 3", title: "Conocer" }
];

galleryImages.forEach(imageData => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
  
    const img = document.createElement("img");
    img.src = imageData.src; 
    img.alt = imageData.alt;
    galleryItem.appendChild(img);
  

    const description = document.createElement("p");
    description.classList.add("image-description");
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    galleryItem.appendChild(description);
  
    const button = document.createElement("a");
    button.href = "#";
    button.classList.add("button");
    button.textContent = imageData.title;
    galleryItem.appendChild(button);
  
    gallery.appendChild(galleryItem);
  });
  
  app.appendChild(gallery);