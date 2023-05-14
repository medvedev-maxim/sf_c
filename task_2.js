// Задание: Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false

// Объекты

let car = {
    type: 'Sedan'
}

const nissan = Object.create(car);
nissan.model = 'Nissan';
nissan.speed = 100;

// Функция
function checkProp(prop,obj){
    return (prop in obj);
}

console.log(checkProp('model',nissan));
console.log(checkProp('color',nissan));