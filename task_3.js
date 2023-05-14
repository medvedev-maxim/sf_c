// Задание: Написать функцию, которая создает пустой объект, но без прототипа.

// Функция
function createEmptyObject() {
    return Object.create(null);
  }

console.log(createEmptyObject())