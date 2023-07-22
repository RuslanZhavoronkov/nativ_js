//sorting

// const students =['Bob','Alex','Liza', 'Ivan', 'maksim']

// //console.log(students.sort());
// console.log([...students].sort) //для реакта
// console(students)

// console.log(students.slice().sort())

// const numbers = [234, 645, 100, 1000, -34, -10, -24] 
// console.log(numbers.sort())

// const compareFunction = (a, b) => {
//     if (a > b) {
//         return 123
//     } else {
//         return -1
//     }
// }



// const newComparefunction = (a, b) => a - b
// console.log(numbers)
// console.log(numbers.sort(compareFunction))


// const student = [
//     {
//         name: 'Bob',
//         age: 22
//     },

//     {
//         name: 'Alex',
//         age: 22
//     },

//     {
//         name: 'Liza',
//         age: 20
//     },

//     {
//         name: 'Ivan',
//         age: 24
//     }
// ]


// const sortedStudents = student.sort((a,b) => a.age - b.age)

// console.log(students.sort ((a,b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()))


//Алгоритм пузырьковой сортировки который реакту не нужен 

const numbers = [323423, 6, 78, 34, 7, 1, 1367]; //меняем местами два соседних числа
let count = 0;

for (let j = 0; j < numbers.length - 1; j++) {
    count++;
    let isSorted = true;
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        count++
        if (numbers[i] > numbers[i + 1]) {
            isSorted = false
            let temp = numbers[i]
            numbers[i] = numbers[i + 1]
            numbers[i + 1] = temp
        }
        if (isSorted) break
    }

}

console.log(numbers)
console.log(count);

