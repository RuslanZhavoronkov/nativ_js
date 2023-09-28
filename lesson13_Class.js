const car1 = {
    brand: 'bmw',
    speed: 200,
    startEngine() {
        console.log(`Start${this.brand}`)
    }
}

const car2 = {
    brand: 'kia',
    speed: 200,
    startEngine() {
        console.log(`Start${this.brand}`)
    }
}

function createCar(brand, speed) {
    return {
        brand,
        speed,
        startEngine() {
            console.log(`Start${this.brand}`)
        }
    }
}

const car3 = createCar('audi', 240)


//конструкторы
function Car(brand, speed) {
    //{}
    this.brand = brand
    this.speed = speed
    // this.startEngine = function() {
    //     console.log(`Start${this.brand}`)
    // }
}
const audi = new Car('bmw', 200)

Car.prototype.startEngine = function () {
    console.log(`Start${this.brand}`)
}

//_________________________________________________________________

//Классы

class Car {
    #brand
    #speed
    constructor(brand, speed) {
        this.#brand = brand //сокрытие свойства(к нему нельзя обратиться напрямую)
        this.speed = speed
    }
startEngine(){
    console.log(`Start${this.brand}`) //только таким методом запишется в прототип
}

stopEngine=()=>{
    console.log(`Start${this.brand}`)
}
getBrand() {
    return this.#brand 
}

setBrand(newBrand){
    if(newBrand.length < 3) throw new Error('Brand is too short') //делаем свойства скрытыми и делаем сокрытие логики
    this.#brand = newBrand
}


get speed() {

}
 set speed (newSpeed) {
    if (newSpeed < 100) throw new Error ('')
 }

get brand () {
    return this.#brand
}

set brand (newBrand) {
    if(newBrand.length < 3) throw new Error('Brand is too short') //делаем свойства скрытыми и делаем сокрытие логики
    this.#brand = newBrand
}

//Статические методы класса(метод доступен только в классе) - НЕ НАСЛЕДУЮТСЯ!!!!
static concatCars(car1, car2){
return car1.brand + car2.brand
}

}

const mers = new Car('bmw', 200)

mers.brand = 'Toyota' //(если справо =, то вызывается метод set)


//Статические методы класса(метод доступен только в классе)

Car.concatCars(bmw, kia)

