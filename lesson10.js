//promise
setTimeout(() => {
    console.log('hello')
}, 2000)


fetch(url, callback)=> {
    callback(data)
}


// fetch('https://libruary.com/authors', (err,data) => {
//     if(err) {
//         console.log ('err')
//     } else{
//         console.log(data)

//     }
//     fetch('https://libruary.com/authors', (err,data) => {
//     if(err) {
//         console.log ('err')
//     } else{
//         console.log(data)
// })

//promise  - это объект у которого есть состояния padding, resolve, reject
// const server = { //библиотека которая делает асинхронные запросы на сервер
//     getData() {
//         return new Promise((resolve, reject) => {
//             //asinchron operation
//             setTimeout(()=> {
//                // resolve('Some data')
//                reject('Some error') //если ошибка(текст ошибки)
//             },2000)
//         })
//     }
// }


// const promise = server.getData();
// console.log('promise',promise)


function MyPromise(executor) {
    const resolve = () => {
        return {
            status: 'fullfilled',
            result: result
        }
    }
    const reject = () => {
        return {
            status: 'rejected',
            result: err
        }
    }
    exucutor(resolve, reject)
}




//метод чтения файла с диска

const fs = require('fs')
//наришем свой промис
const file = {
    getFile() {
        return new Promise((res, rej) => {
            fs.readFile('./index.js', (err, data) => { //поиск файла(асинхронная операция кот нужно поместить в промис)
                if (err) {
                    rej(err)
                } else {
                    res(data)
                }
            })
        })
    }
}



//обработка промис
const server = { //библиотека которая делает асинхронные запросы на сервер
    getData() {
        return new Promise((resolve, reject) => {
            //asinchron operation
            setTimeout(() => {
                // resolve('Some data')
                reject('Some error') //если ошибка(текст ошибки)
            }, 2000)
        })
    }
}


const promise = server.getData();
console.log('promise', promise)

//обработка резельтата

promise.then((data) => { // при положительном результате отработке промиса (resolve)
    console.log(data)
},
    (err) => {                     //отр ошибку в then
        console.log(err)
    })



promise.catch((err) => { //при ошибке обработке промиса (reject)
    console.log(err);
})



promise.finally(() => {          // для того чтобы не дублировать код в rej и res
    console.log('finally')
})


const promise1 = ser.getData()


const promise2 = promise1.then((data) => { //метод then возвращает promise
    console.log(data)
    return 10
})

const promise3 = promise2.then((data) => {
    console.log('then in promise2', data)
})

promise3.then((data) => {
    console.log('then in promise3', data)
})

//цепочка промисов
server
.getData()//запрос на сервер
    .then((data) => { //метод then возвращает promise
        console.log(data)
        return 10
    })
    .then((data) => {
        console.log('then2')
        throw newError('some error then2')
        return data

    })
    .then((data) => {
        console.log('then3', data)
    })
    .catch((err) => {   //catch отлавливает ошибку(reject из выше стоящих промисов)
        console.log('catch', err)
    })
    .finally(() => {       //тоже возвращает promise. finally нечего не может принятьА
        console.log('finally')
    })


//без обработки ошибки(без catch)
axios.get('url').then((data) => {
    setEnvironmentData(data)
})

fetch('then://')


Promise.reject("reject1")
  .catch((t) => t + "catch1")
  .catch((t) => t + "catch2")
  .then((t) => t + "then1")
  .finally((t) => t + "finally")
  .then((t) => console.log(t));
//reject1 catch1 then1


//Прочитать про промисы