//_proto|prototype,extends

class Car {
    constructor(brand) {
        //{}
        this.brand = brand
        this.state = {}
        //return{brand:bmw}
    }
    startEngine() {
        console.log(`start${this.brand}`)
    }
    stopEngine = () => {
        console.log(`stop${this.brand}`)
    }

    static concatCar(){
        console.log('concat')
    }
}

const car1 = new Car('bmw')
const car2 = new Car('bmw')

car1.startEngine===car1.startEngine //true //function declaration(функция попала в прототип класса)
car1.stopEngine === car2.stopEngine //false функция создается заново для каждого объекта

console.log(car1._proto === Car.prototype) //proto это ссылка на объект класса с помощью которого был создан

var a  = new Array()
a._proto_ = Array.prototype

var b = 1
b._proto_ === Number.prototype //примитив стал объетом(точка(через точку примитив становится объектом(boxing)))
b.toFixed(1)

var b = new Number(1)

//по ссылке proto можно перейти на свойства класса с помощью которого был создан на свойство prototype

Car._proto_ = Function.prototype

const foo = new Function()
foo._proto_ = Function.prototype

const a = 'string'
console.log(a.length)

Function._proto_ === Function.prototype

Function._proto_._proto_ === Object.prototype

Function.prototype._proto_ === Object.prototype

//Свойство prototype есть только у классов и функций конструкторов, proto есть у всех объектов

const foo = []
const bar = {}

console.log(foo._proto_._proto_ === bar._proto_) //true

const a = []
console.log(a._proto_._proto_._proto_)//null

const pr = Promise.resolve(1)
console.log(pr._proto_._proto_._proto_ === null)

//прототипное наследование с помощью свойства proto
const shogun = new Samurai("Dimych")
console.dir(shogun.__proto__.constructor.__proto__ === Function.prototype)

//Наследование у классов

class SuperCar extends Car{
    constructor(brand,canFly){
        super(brand)
        this.canFly = canFly
    }

    startFly(){
        console.log('hello')
    }

}

const superCar1 = new SuperCar ('audi', true)
console.log(superCar1.startEngine)
console.log(superCar1.__proto__.__proto__ === Car.prototype) //true



//Функции конструктор
function Car (brand) {
this.brand = brand

}

Car.prototype.startEngine = function(){ //чтобы все экземпляры Car наследовали
    console.log(`Start ${this.brand}`)
}

const car = new Car('bmw')
car.startEngine()

Car.concatCar()


function SuperCar(brand, canFly) {
this.brand = brand
this.canFly = canFly
}

SuperCar.prototype.startFly = function() {
    console.log(``)
}


SuperCar.prototype.__proto__ = Car.prototype //перезатираем ссылку _proto_