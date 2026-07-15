// Задание 2. Отфильтровать массив так, чтобы получить числа начиная с 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);

// Задание 3. Проверить, есть ли в массиве определённая сущность
const categories = ["Компьютеры", "Смартфоны", "Бытовая техника", "Автомобили"];
const hasSmartphones = categories.some((category) => category === "Смартфоны");

// Задание 4. Функция, которая переворачивает массив
const reverseArray = (array) => {
  const result = [];

  array.forEach((item) => result.unshift(item));

  return result;
};

// Проверка работы кода
console.log(filteredNumbers);
console.log(hasSmartphones);
console.log(reverseArray(numbers));
console.log(reverseArray(categories));
