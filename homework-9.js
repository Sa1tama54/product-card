// Задание 2. Отфильтровать массив так, чтобы получить числа начиная с 5
import { comments } from "./comments.js";

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

// Задание 7. Комментарии, почта которых содержит ".com"
const filteredComments = comments.filter((comment) => {
  return comment.email.includes(".com");
});

console.log(filteredComments);

// Задание 8. Изменить postId в зависимости от id пользователя
const commentsWithPostId = comments.map((comment) => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
  };
});

console.log(commentsWithPostId);

// Задание 9. Оставить в объектах только id и name
const commentsWithIdAndName = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(commentsWithIdAndName);

// Задание 10. Добавить свойство isInvalid
const commentsWithValidity = comments.map((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});

console.log(commentsWithValidity);

// Задание 11. Массив почт через reduce и map
const emailListWithReduce = comments.reduce((result, comment) => {
  result.push(comment.email);

  return result;
}, []);

const emailListWithMap = comments.map((comment) => comment.email);

console.log(emailListWithReduce);
console.log(emailListWithMap);

// Задание 12. Привести массив почт к строке через toString() и join()
const emailsString = emailListWithReduce.toString();
const formattedEmails = emailListWithReduce.join(", ");

console.log(emailsString);
console.log(formattedEmails);
