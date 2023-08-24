//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"

const repeatString1 = (str, num, delimiter) => {
    console.log(num === 0 ? '' : (`${str}${delimiter}`).repeat(num - 1) + str);

}

repeatString1("yo", 3, " ")
repeatString1("yo", 3, ",")
repeatString1("yo", 3, ", ")
repeatString1("yo", 0, ", ")
repeatString1("yo", 1, ", ")


// const repeatString2 = (str, num, delimiter) => {
//     let y = (`${str}${delimiter}`)
//     let x = str
//     let result = '';
//     for (let i = 0; i < (num - 1); i++) {
//         result += y;
//     }
//     console.log(result + x);
// }

// repeatString("yo", 3, " ")
// repeatString("yo", 3, ",") 
// repeatString("yo", 3, ", ") 
// repeatString("yo", 0, ", ") 
// repeatString("yo", 1, ", ") 


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart1 = (str, substr) => console.log(str.toLowerCase().startsWith(substr.toLowerCase()))

checkStart1("Incubator", "inc");
checkStart1("Incubator", "yo")

const checkStart2 = (str, substr) => str.slice(0, substr.length).toLowerCase() === substr.toLowerCase()

checkStart2("Incubator", "inc");
checkStart2("Incubator", "yo")

const checkStart3 = (str, substr) => {
    let result = 0;
    const string = str.toLowerCase();
    const substring = substr.toLowerCase();

    for (let i = 0; i < substr.length; i++) {

        if (string[i] !== substring[i]) {
            return false;
        }

        // str.toLowerCase().indexOf(substr[i].toLowerCase()) != -1 ? result += 1 : result += 0   //str.toLowerCase().indexOf(substr[i])
    }
    // console.log(result === (substr.length))
    return true;
}
checkStart3("Incubator", "inc");
checkStart3("Incubator", "yo")


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => console.log(`${str.slice(0, num)}...`);
truncateString("Всем студентам инкубатора желаю удачи!", 10)

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

const getMinLengthWord = (str) => {

    if (str === "" || typeof str !== 'string') {
        return null
    }
    let a = str.split(' ').sort((a, b) => a.length - b.length)
    console.log(a[0]);

}



getMinLengthWord("Всем студентам инкубатора желаю удачи.")
getMinLengthWord("")
getMinLengthWord(123)
getMinLengthWord(true)
getMinLengthWord(undefined)

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

const setUpperCase = (str) => {
    const arr = str.split(' ');
    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
        newStr += `${arr[i][0].toUpperCase()}${arr[i].slice(1).toLowerCase()} `;
    }
    console.log(newStr);
}

setUpperCase("всем стУдентам инкуБатора Желаю удачИ!")


//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

const isIncludes = (str, substr) => {
    let result = 0;
    for (let i = 0; i < substr.length; i++) {
        str.toLowerCase().indexOf(substr[i].toLowerCase()) != -1 ? result += 1 : result += 0
    }
    console.log(result === substr.length)
}

isIncludes("Incubator", "Cut")
isIncludes("Incubator", "table")
isIncludes("Incubator", "inbba")
isIncludes("Incubator", "inba")
isIncludes("Incubator", "Incubatorrr")


//_______________________________________________________________________________________________________________________________________________________________export const students: Array<StudentType> = [


const students = [
    { id: 1, name: "Bob", age: 34 },
    { id: 2, name: "Alex", age: 23 },
    { id: 3, name: "Ann", age: 25 },
    { id: 4, name: "Charley", age: 20 },
]

console.log(students[1].name)
console.log(students[3].name)


const friends = {
    1: ["Jack", "Oliver", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Lewis", "Michael"],
    4: ["Oscar", "Thomas", "William",],
}

