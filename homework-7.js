const showWeather = (city, temperature) => {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`,
  );
};

showWeather("Нью-Йорк", 29);

const LIGHT_SPEED = 299792458;

const checkSpeed = (speed) => {
  if (speed > LIGHT_SPEED) {
    return "Сверхсветовая скорость";
  } else if (speed < LIGHT_SPEED) {
    return "Субсветовая скорость";
  }
  return "Скорость света";
};

console.log(checkSpeed(299792458));

let product = "Playstation 5";
let productPrice = 600;

const buyProduct = (budget) => {
  if (budget >= productPrice) {
    return `${product} приобретён. Спасибо за покупку!`;
  }

  let dif = productPrice - budget;
  return `Вам не хватает ${dif}$, пополните баланс`;
};

console.log(buyProduct(450));
