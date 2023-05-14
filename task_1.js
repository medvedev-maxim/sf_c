// Задание: Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

// Объекты для перебора

let car = {
    type: 'Sedan'
}

const nissan = Object.create(car);
nissan.model = 'Nissan';
nissan.speed = 100;

// Функция для перебора собственных параметров объекта
function outputProp(obj){
    for(prop in obj){
        if(obj.hasOwnProperty(prop)){
            console.log(`${prop}: ${obj[prop]}`)
        }
    }
}

outputProp(nissan);