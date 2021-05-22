let admin;
let name1;
name1 = "Джон";
admin = name1;
alert(admin);


let nameOurPlanet;
let currentSiteVisitor;


const BIRTHDAY = '18.04.1982'; // заглавные использовать нужно
const AGE = someCode(BIRTHDAY); // заглавные тут не нужно


let name2 = "Илья";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name2}` ); // hello Илья


let name3 = prompt('Пользователь, как тебя зовут?', '');
alert(`Привет ${name3}!`); // выведет введённое имя.


let a = 1, b = 1;
let c = ++a; // a=2 / c=2
let d = b++; // d=1 / b=2


let a = 2;
let x = 1 + (a *= 2); // a=4 / x=5


"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45' 
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
"  -9  " + 5  // ' -95 '
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1// NaN
" \t \n" - 2 // -2


let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b); // 3


5 > 4 // true
"ананас" > "яблоко" //false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n"  // false
null === +"\n0\n" // false


let a = +prompt("Введи число:", "");
if (a > 0) { 
  console.log('Значение больше нуля');
} else if (a < 0) {
  console.log('Значение меньше нуля!');
} else {
  console.log('Значение равно нулю');
}
let val = prompt('Как официально называется JavaScript?', '');
if (val == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}


a = 10;
b = 2;
let result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);

let login = prompt('Введите вашу должность:', '');
let message = (login == 'Сотрудник') ? 'Привет!':
        (login == 'Директор') ? 'Добрый день!':
        (login == '') ? 'Нет логина!':
        '';
alert(message);


alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); //1 после 2
alert( 1 && null && 2 ); // null. первое ложное
alert( alert(1) && alert(2) ); // 1 потом undefined
alert( null || 2 && 3 || 4 ); //3 первое истинное


let age = 92;
if (age <= 14 || age >= 90) {
    console.log("не находится в диапозоне от 14 до 90")
} else {
    console.log('находится в диапозоне от 14 до 90')
}


let age1 = 92;
if (!(age1 <= 14 || age1 >= 90)) {
    console.log("находится в диапозоне от 14 до 90")
} else {
    console.log('не находится в диапозоне от 14 до 90')
}


let userName = prompt("Кто там?", '');
if (userName == 'Админ') {
  let pass = prompt('Пароль?', '');
  let adminPass = (pass == 'Я главный') ? 'Здравствуйте!':
        (pass == '' || pass == null) ? 'Отменено' :
        'Неверный пароль';
  alert(adminPass);
} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}


let firstName = null;
let lastName = null;
let nickName = "Суперкодер";
// показывает первое определённое значение:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер


let i = 0;
while (i < 3) {
    alert(i);
    i++;
}

// for (начало; условие; шаг) {
//     // ... тело цикла ...
//   }
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
  }

let i = 3;
while (i) {
  alert( i-- );  // выведет 3,2,1
}


for (let i = 0; i < 5; i++) alert( i ); //0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i ); //0, 1, 2, 3, 4

//При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i < 11; ++i) {
if (!(i % 2 == 0)) continue;
alert(i);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
    alert(i);
    }
}

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

//Напишите цикл, который предлагает prompt ввести число, большее 100
let value;
do { value = +prompt("Введите число больше 100:", ''); 
} while (value <= 100);
alert('Число больше 100!');

//Напишите "if", аналогичный "switch"
browser = prompt("Enter browser name:", '')
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' 
|| browser == 'Firefox' 
|| browser == 'Safari' 
|| browser == 'Opera') {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}

//Переписать условия "if" на "switch"
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0: alert('Вы ввели число 0'); break;
    case 1: alert('Вы ввели число 1'); break;
    case 2: case 3: alert('Вы ввели число 2, а может и 3'); break;
}

//Функции

//локальные переменные
function showMessage() {
    let message = "Hi, people!";
    console.log(message);
}
showMessage();
console.log(message); //ошибка

//внешние переменные
let nameMessage = 'Артём';
function showMessage2() {
    console.log('Привет, ' + nameMessage + '!');
}
showMessage2();
console.log(nameMessage); //верно

//параметры
function showMessage3(text1, text2) {
    console.log(text1 + ' - ' + text2);
}
showMessage3('Артём', 'Молодец');
showMessage3('Дима', 'туго понимает');
showMessage3('но Дима справится', 'ему просто нужно немного больше времени');

//Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

function checkAge(age) {
    return (age > 18) ? true: 
    confirm('Родители рарзешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
    return (a < b) ? console.log(a): console.log(b);
}
min(2, 5); //2
min(3, -1); //-1
min(1, 1); //1

//Напишите функцию pow(x,n), которая возвращает x в степени n
function pow(x, n) {
    return (n >= 1) ? console.log(x**n): console.log('Вы ввели не натуралное число');
}
pow(3, 2);
pow(3, 3);
pow(1, 100);

// Function Declaration
function sum(a, b) {
    return a + b;
  }

// Function Expression
let sum = function(a, b) {
    return a + b;
  };
//стрелочная Function Expression
let sum = (a, b) => a + b;

