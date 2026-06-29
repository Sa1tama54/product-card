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