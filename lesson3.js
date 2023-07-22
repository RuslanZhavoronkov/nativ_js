//изменения которое браузер может отследить=> событие
//Событие => браузер вызывает функцию-обработчик
//обработчик, слушатель, подписчик, handler, listener, subscriber
//Обработчик должен быть назначен
//событие=> {...} => handler({...})
//{...} => event, ev, e

const handler = (event) => {
  event.stopPropagation(); // событие дальше не всплывать к родителям
  if (event.currentTarget.id === "small") {
    alert("Yo!!!");
  }
};

const handler2 = () => {
  alert("hey");
};

const sm = document.getElementById("small");

sm.onclick = handler;
sm.onclick = (e) => {};
//sm.onclick = handler()// ТАК НЕЛЬЗЯ!!!
sm.onclick = undefined; //Отмена обработчика события
sm.onclick = null;

//можем повесить несколько событий на один элемент
sm.addEventListener("click", handler);
sm.addEventListener("click", handler2);

sm.removeEventListener("click", handler);

const md = document.getElementById("medium");
const bg = document.getElementById("big");

// md.addEventListener("click", handler)
// bg.addEventListener("click", handler)

md.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Wow");
});
bg.addEventListener("click", () => {
  alert("Boom");
});

const a = document.getElementById("a");
a.addEventListener("click", (e) => {
  e.preventDefault(); //Предотвратить поведение по умолчанию
  alert("12345");
});
