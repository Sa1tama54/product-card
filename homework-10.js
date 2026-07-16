import { products } from "./products.js";

// Элементы для рендера карточек
const productCardTemplate = document.querySelector("#product-card-template");
const productsList = document.querySelector(".products__list");

// Задание 5. Функция спрашивает кол-во карточек
const PROMPT_MESSAGE = "Сколько карточек отобразить? От 1 до 5";

const getCardsCount = () => {
  let count = prompt(PROMPT_MESSAGE);

  while (count !== null && (+count < 1 || +count > 5 || isNaN(+count))) {
    count = prompt(PROMPT_MESSAGE);
  }
  return count;
};

// Задание 3, 5. Функция рендерит карточки из переданного массива
const renderProductCards = (products) => {
  products.forEach((product) => {
    const productClone = productCardTemplate.content.cloneNode(true);
    productClone.querySelector(".card__picture").src = product.image;
    productClone.querySelector(".card__picture").alt = product.title;
    productClone.querySelector(".card__category").textContent =
      product.category;
    productClone.querySelector(".card__title").textContent = product.title;
    productClone.querySelector(".card__desc").textContent = product.description;

    const compoundList = productClone.querySelectorAll(".card__compound > li");
    compoundList.forEach((item, i) => {
      item.textContent = product.compoundList[i];
    });

    const price = `${product.price} \u20BD`;
    productClone.querySelector(".card__price-value").textContent = price;

    productsList.appendChild(productClone);
  });
};

renderProductCards(products.slice(0, getCardsCount()));

// Задание 4. Получить с помощью reduce массив объектов {название: описание}
const productsWithTitleAndDesc = products.reduce((result, product) => {
  result.push({
    [product.title]: product.description,
  });

  return result;
}, []);

console.log(productsWithTitleAndDesc);
