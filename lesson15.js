//Pattern это готовые решения для типовых задач и проблем(наблюдатель, прототип, фабричный метод)
//-есть подклассы
//refactoring.guru
//чистый код (бэк)

//published/subcriber(publisher тот кто предоставляет метод)
store.subscribe(function subcriber() { }) //изменился стор
GamepadButton.addEventListener('click', function subcriber() { }) //клик
useEffect(() => {
    console.log('react')
}, [])
setTimeout(function subcriber() { }, 1000) //прошла секунда
Promise.then(function subcriber() { })//промис заризолвелся

{/* <CustomButton  onClick (()=> {})/> */ }
AudioParamMap.post('/user', function subcriber() { })

//subscriber === observer === listener === handler === watcher

const button = {
    _subscribers: [],
    'click':[],
    'focus':[],
    addEventListener(subcriber) {
        this._subscribers[eventName].push(eventName,subcriber)
    },
    click() {
        this._subscribers['click'].forEach(subcriber => subcriber())
    },
    focus() {
        this._subscribers['focus'].forEach(subcriber => subcriber())
    }
}


