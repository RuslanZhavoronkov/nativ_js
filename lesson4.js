const todoList = [
    {
        id: '1',
        title: 'What to learn',
        filter: 'all',
     
    },
    {
        id: '2',
        title: 'What to buy',
        filter: 'all',
       
    },
   
]

// const tasks = [
   
//         {id: '10', todolist: '1', titel:'HTML', isDone:true},
//         {id: '10', todolist: '1', titel:'CSS', isDone:true},
//         {id: '10', todolist: '1', titel:'JS/TS', isDone:true},
   
//         {id: '13',todolist: '2', titel:'Beer', isDone:true},
//         {id: '14', todolist: '2', titel:'Meat', isDone:true},
//         {id: '15', todolist: '2', titel:'Cheeps', isDone:true}
   
// ]



const todoList_1 = '1'
const todoList_2 = '2'

const tasks = {
    [todoList_1]: [  //скобки обязательны, чтобы прочитала название переменных
        {id: '10',  titel:'HTML', isDone:true},
          {id: '10', titel:'CSS', isDone:true},
            {id: '10',  titel:'JS/TS', isDone:true},
        ],

    [todoList_2]: [
        {id: '13', titel:'Beer', isDone:true},
        {id: '14',  titel:'Meat', isDone:true},
         {id: '15',  titel:'Cheeps', isDone:true}
    ]
}


//1. Добав нового тудулиста
const addTodo (todoListTitle) => {
    const newTodoListId ='3',
    const newTodoList = {
        id:newTodoListId,
        title: todoListTitle,
        filter: 'All'
    }
}

const newTodoListsState = [...todoList, newTodoList]

const newTaskState = {...tasks, [newTodoListId]: []}

addTodo("What to read")


//delete

const removeTodoList = (todoListId) => {
    const newTodoListsState = todoLists.filter(e => e.id !== todoListId)
    const copyTasksState = {...tasks}
    delete copyTasksState[todoListId]
}

removeTodoList('2');


//----------------------------------------------------------------------------------------------------------------
const students = [
    {   id: "1",
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: "2",
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: "3",
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: "4",
        name: "John",
        age: 21,
        isMarried: false,
        scores: 100
    },
    {
        id: "5",
        name: "Helge",
        age: 21,
        isMarried: false,
        scores: 100
    },
];


// const studentsObj ={
//     '1': {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },


//     '2': {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     }
// }

// const studentsObj = {
//     for (let i = 0; i < students.length; i++) {
//         studentsObj[students[i].id] = students [i]

//         delete studentsObj[students[i].id].id
//     }
// }

// console.log(students.reduse(obj, el) => {
//     obj[el.id] = el
//     delete obj[el.id].id
//     return obj;

// }, {})


// const studentsObj_2={
//     '20': 1,
//     '21': 3,
//     '22': 1
// }

const studentsObj_2 = {
    for (let i = 0; i < students.length; i++) {
     if  ( Object.keys(studentsObj_2).includes(students[i].age.toString())) {
        studentsObj_2[students[i].age] = studentsObj_2[students[i].age] +1
     } else{
        studentsObj_2[students[i].age] = 1
     }
    }
}


console.log(studedents.reduse((obj, el)=> {
    if(Object.hasOwn(obj, el.age.toString())){
        obj[el.age] +=1 
    } else {
        obj[el.age] = 1
    }
    return obj;
}))