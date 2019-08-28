//Variables
document.write('Hello javascript!');
document.write('Hello second');

let day;
day = 1;
let basicValue = 12345;
let someText = 'Hello world';
let gameOver = true;
document.write(someText);

//Functions

//function declaration
function showName(name, surname) {
   return name + ' ' + surname;
}

//function invocation
showName('Ivan', 'Ivanov');
showName('Vova', 'Vovovich');

let ivanName = 'Ivan';
let ivanSurname = 'Ivanov';

//function expression

let ivanFullName = showName(ivanName, ivanSurname);
console.log(ivanFullName);


