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

// Открытие страницы Google
const openGoogleBtn = document.querySelector("#open-google-btn");

openGoogleBtn.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer) {
    window.open("https://google.com");
  }
  return;
}

// Вывод сообщения в консоль
const logBtn = document.querySelector("#output-log-btn");

logBtn.addEventListener("click", outputLogMessage);

function outputLogMessage() {
  const answer = prompt("Введите сообщение:", "Сообщение");

  if (answer === null) {
    return;
  }

  if (answer.trim().length === 0) {
    alert("Попробуйте снова!");
  } else {
    console.log(answer);
    alert(answer);
  }
}
