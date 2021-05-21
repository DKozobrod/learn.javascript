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

for (начало; условие; шаг) {
    // ... тело цикла ...
  }
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
  }

let i = 3;
while (i) {
  alert( i-- );  // выведет 3,2,1
}
