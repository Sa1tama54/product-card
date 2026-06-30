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

const product = "Playstation 5";
const productPrice = 600;

const buyProduct = (budget) => {
  if (budget >= productPrice) {
    return `${product} приобретён. Спасибо за покупку!`;
  }

  const difference = productPrice - budget;
  return `Вам не хватает ${difference}$, пополните баланс`;
};

console.log(buyProduct(450));

const firstname = "John";
const lastname = "Winchester";
const age = 42;

const createUser = (firstname, lastname, age) => {
  return `Имя: ${firstname}\nФамилия: ${lastname}\nВозраст: ${age}`;
};

console.log(createUser(firstname, lastname, age));
