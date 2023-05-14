// Общий класс электроустройст

class Electrodevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.inWork = false;
    }

    turnON () {
        if(!this.inWork){
            this.inWork = true;
            console.log(`${this.name} ВКЛ`);
        } else{
            console.log(`${this.name} уже ВКЛ`);
        }
    }
    
    turnOFF() {
        if(this.inWork){
            this.inWork = false;
            console.log(`${this.name} ВЫКЛ`);
        } else{
            console.log(`${this.name} уже ВЫКЛ`);
        }
    }
}

// Класс ламп

class Lamp extends Electrodevice {
    constructor(name, power, place) {
        super(name, power);
        this.place = place;
    }
    
    smash() {
        this.inWork = false;
        console.log(`Упс... ${this.name} разбилась`);       
    }
}

// Класс телевизоров

class TV extends Electrodevice {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    switchcChannel() {
        console.log(this.inWork ? `Канал ${this.name} переключен` : `${this.name} не включен`);
    }
}

// Создание экземпляров

const Tablelamp = new Lamp ('Настольная лампа', 60, 'Спальня');
const TvOnKitchen = new TV ('ТВ на кухне', 100, 'Кухня', 'Samsung');

console.log(Tablelamp);
console.log(TvOnKitchen);

Tablelamp.turnON();

Tablelamp.smash();
TvOnKitchen.switchcChannel();
