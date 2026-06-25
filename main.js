const productCard = document.querySelector(".card");
const changeCardColorBtn = document.querySelector("#change-card-color-btn");

changeCardColorBtn.addEventListener("click", () => {
  productCard.style.backgroundColor = "red";
});
