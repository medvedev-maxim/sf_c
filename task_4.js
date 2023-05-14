// Общий класс электроустройст

function Electrodevice (name, power) {
    this.name = name;
    this.power = power;
    this.inWork = false;
}

Electrodevice.prototype.turnON = function() {
    if(!this.inWork){
        this.inWork = true;
        console.log(`${this.name} ВКЛ`);
    } else{
        console.log(`${this.name} уже ВКЛ`);
    }
}
Electrodevice.prototype.turnOFF = function() {
    if(this.inWork){
        this.inWork = false;
        console.log(`${this.name} ВЫКЛ`);
    } else{
        console.log(`${this.name} уже ВЫКЛ`);
    }
}

// Класс ламп

function Lamp (name, power, place) {
    this.name = name;
    this.power = power;
    this.place = place;
}

Lamp.prototype = new Electrodevice();

Lamp.prototype.smash = function () {
    this.inWork = false;
    console.log(`Упс... ${this.name} разбилась`);
}

// Класс телевизоров

function TV (name, power, brand) {
    this.name = name;
    this.power = power;
    this.brand = brand;
}

TV.prototype = new Electrodevice();

TV.prototype.switchcChannel = function () {
    console.log(this.inWork ? `Канал ${this.name} переключен` : `${this.name} не включен`);
}

// Создание экземпляров

const Tablelamp = new Lamp ('Настольная лампа', 60, 'Спальня');
const TvOnKitchen = new TV ('ТВ на кухне', 100, 'Кухня', 'Samsung');

console.log(Tablelamp);
console.log(TvOnKitchen);

Tablelamp.turnON();

Tablelamp.smash();
TvOnKitchen.switchcChannel();
