//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
//repeatString("yo", 3, " ") => "yo yo yo";
//repeatString("yo", 3, ",") => "yo,yo,yo";
//for или str.repeat()

const repeatString1 = (str, num, delimiter) => {
    let result = (`${str}${delimiter}`).repeat(num - 1) + str;
    console.log(result)
}
repeatString1("yo", 3, ",")
repeatString1("yo", 3, " ")


const repeatString2 = (str, num, delimiter) => {
    let y = (`${str}${delimiter}`)
    let x = str
    let result = '';
    for (let i = 0; i < (num - 1); i++) {
        result += y;
    }
    console.log(result + x);
}

repeatString2("yo", 3, " ")
repeatString2("yo", 3, ",")


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, 
//если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart1 = (str, substr) => console.log(str.toLowerCase().startsWith(substr.toLowerCase()))

checkStart1("Incubator", "inc");
checkStart1("Incubator", "yo")

const checkStart2 = (str, substr) => console.log(str.slice(0, substr.length).toLowerCase() === substr)

checkStart2("Incubator", "inc");
checkStart2("Incubator", "yo")

const checkStart3 = (str, substr) => {
    let result = 0;
    for (let i = 0; i < substr.length; i++) {
        str.toLowerCase().indexOf(substr[i].toLowerCase()) != -1 ? result += str.toLowerCase().indexOf(substr[i]) : result += 0
    }
    console.log(result === (substr.length))
}
checkStart3("Incubator", "inc");
checkStart3("Incubator", "yo")


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => console.log(`${str.slice(0, num)}...`);
truncateString("Всем студентам инкубатора желаю удачи!", 10)

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (str) => {
    let arr = str.split(' ').sort((a, b) => a.length - b.length)
    console.log(arr[0] ? arr[0] : null)
}

getMinLengthWord("Всем студентам инкубатора желаю удачи!");
getMinLengthWord("");


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

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
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

const isIncludes = (str, substr) => {
    let result = 0;
    for (let i = 0; i < substr.length; i++) {
        str.toLowerCase().indexOf(substr[i].toLowerCase()) != -1 ? result += str.toLowerCase().indexOf(substr[i]) : result += 0
    }
    console.log(result === (substr.length))
}