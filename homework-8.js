// Задание 3. Объект с личными данными
const person = {
  firstname: "Din",
  lastname: "Winchester",
  email: "example@gmail.com",
  job: "Сварщик",
  position: "6-й разряд",
  age: 40,
  country: "США",
  status: "Холостяк",
};

// Задание 4. Объект "автомобиль" + владелец (объект из задания 3)
const car = {
  brand: "Chevrolet",
  model: "Impala",
  year: 1967,
  color: "Чёрный",
  transmissionType: "Автоматическая",
};

car.carOwner = person;

// Задание 5. Функция: добавляет "максимальную скорость", если её нет
const MAX_SPEED = "200 км/ч";

const setMaxSpeed = (car) => {
  if ("maxSpeed" in car) return;
  car.maxSpeed = MAX_SPEED;
};

// Задание 6. Функция: выводит значение свойства объекта по его имени
const getObjectProperty = (obj, property) => {
  return obj[property];
};

// Задание 7. Массив с названиями продуктов
const products = ["Хлеб", "Молоко", "Курица", "Яйца", "Рыба"];

// Задание 8. Массив объектов книг + добавление книги в конец
const books = [
  {
    name: "Дюна",
    author: "Фрэнк Герберт",
    year: 1965,
    coverColor: "желто-песочный",
    genre: "Научная фантастика",
  },

  {
    name: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "темно-зеленый",
    genre: "Фэнтези",
  },

  {
    name: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "ярко-бордовый",
    genre: "Фэнтези",
  },

  {
    name: "Игра престолов",
    author: "Джордж Р. Р. Мартин",
    year: 1996,
    coverColor: "серебряно-стальной",
    genre: "Фэнтези",
  },

  {
    name: "Последнее желание",
    author: "Анджей Сапковский",
    year: 1993,
    coverColor: "черно-белый",
    genre: "Фэнтези",
  },
];

const newBook = {
  name: "Звездные войны: Наследник Империи",
  author: "Тимоти Зан",
  year: 1991,
  coverColor: "темно-синий",
  genre: "Научная фантастика",
};

books.push(newBook);

// Задание 9. Массив сущностей из вселенной "Звёздные войны"
// объединение двух массивов спред-оператором
const starWarsMovies = [
  {
    name: "Звёздные войны. Эпизод I: Скрытая угроза",
    director: "Джордж Лукас",
    year: 1999,
    genre: "Научная фантастика, фэнтези",
  },

  {
    name: "Звёздные войны. Эпизод II: Атака клонов",
    director: "Джордж Лукас",
    year: 2002,
    genre: "Научная фантастика, фэнтези",
  },

  {
    name: "Звёздные войны. Эпизод III: Месть ситхов",
    director: "Джордж Лукас",
    year: 2005,
    genre: "Научная фантастика, фэнтези",
  },

  {
    name: "Звёздные войны. Эпизод IV: Новая надежда",
    director: "Джордж Лукас",
    year: 1977,
    genre: "Научная фантастика, фэнтези",
  },

  {
    name: "Звёздные войны. Эпизод V: Империя наносит ответный удар",
    director: "Ирвин Кершнер",
    year: 1980,
    genre: "Научная фантастика, фэнтези",
  },

  {
    name: "Звёздные войны. Эпизод VI: Возвращение джедая",
    director: "Ричард Маркуэнд",
    year: 1983,
    genre: "Научная фантастика, фэнтези",
  },
];

const moviesAndBooks = [...books, ...starWarsMovies];

// Задание 10. map; добавляем в объект свойство isRare
const getMediaWithRarity = (media) => {
  return media.map((item) => ({
    ...item,
    isRare: item.year < 2000,
  }));
};

// Проверка работы кода
setMaxSpeed(car);
console.log(car.maxSpeed);

console.log(getObjectProperty(car, "model"));

const media = getMediaWithRarity(moviesAndBooks);
console.log(media);
