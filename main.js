// Покраска первой карточки
const productCard = document.querySelector(".card");
const cardColorBtn = document.querySelector("#change-card-color-btn");
const moccasinColorHash = "#FFE4B5";

cardColorBtn.addEventListener("click", () => {
  productCard.style.backgroundColor = moccasinColorHash;
});

// Покраска всех карточек
const productCardList = document.querySelectorAll(".card");
const allCardsBtnClass = "#change-all-cards-color-btn";
const allCardsColorBtn = document.querySelector(allCardsBtnClass);
const goldColorHash = "#D4AF37";

allCardsColorBtn.addEventListener("click", () => {
  productCardList.forEach((card) => {
    card.style.backgroundColor = goldColorHash;
  });
});
