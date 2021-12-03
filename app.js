const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];


//Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
//Открытие модального окна по клику на элементе галереи.
//Подмена значения атрибута src элемента img.lightbox__image.
//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modalContainer: document.querySelector(".js-lightbox"),
  modalWindow: document.querySelector(".lightbox"),
  modalButtonClose: document.querySelector('[data-action="close-lightbox"]'),
  modalImage: document.querySelector(".lightbox__image"),
  modalImageContainer: document.querySelector(".lightbox__content"),
  modalBackdrop: document.querySelector(".lightbox__overlay"),
};

const {
  gallery,
  modalContainer,
  modalWindow,
  modalButtonClose,
  modalImage,
  modalImageContainer,
  modalBackdrop,
} = refs;

const createPictureGalleryMarkup = (objects) => {
  return `<li class = "gallery__item"><a class="gallery__link" href = "${objects.original}"><img class="gallery__image" src = "${objects.preview}" data-source = "${objects.original}" alt = "${objects.description}"/></a></li>`;
};

const createGalleryItems = galleryItems
  .map(createPictureGalleryMarkup)
  .join("");

gallery.insertAdjacentHTML("beforeend", createGalleryItems);

gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
  console.log(e.target);
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  modalWindow.classList.add("is-open");
  modalImage.src = e.target.dataset.source;
  modalImage.alt = e.target.alt
  window.addEventListener("keydown", onEscClick);
  console.log(e.target.alt)
  // window.addEventListener("keydown", slideByArrows);
}


modalButtonClose.addEventListener("click", onCloseButtonClick);

function onCloseButtonClick(e) {
  modalWindow.classList.remove("is-open");
  modalImage.src = "";
  modalImage.alt = "";
  window.removeEventListener("keydown", onEscClick);
  modalBackdrop.removeEventListener('click', onCloseButtonClick)
  // window.removeEventListener('keydown', slideByArrows)
}

function onEscClick(e) {
  if (e.code === "Escape") {
    onCloseButtonClick();
  }
}

modalBackdrop.addEventListener("click", onCloseButtonClick);


 
  
//   const galleryItemsIndexArray = galleryItems.map(item => item)
// console.log(galleryItemsIndexArray)
// const [{ preview, original, description }] = galleryItemsIndexArray;

//   function slideByArrows(e) {
//     let currentIndex = galleryItemsIndexArray.indexOf(modalImage.src===original)
//     console.log(currentIndex);
//     if (e.code === "ArrowLeft") {

//       console.log(currentIndex);
   
//     }
//     if (e.code === "ArrowRight") {
  
//     }
//   }