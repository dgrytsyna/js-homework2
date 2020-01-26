/* Задание 1*/
let Name = prompt("Введите ваше имя", "Саша");
alert("Привет, " + Name + "!");
/* Задание 2*/
let yearOfBirth = prompt("Введите ваш год рождения", "2000");
yearOfBirth = parseInt(yearOfBirth);
const thisYear = 2020;
alert("Вам " + (thisYear - yearOfBirth));
/* Задание 3*/
let a = prompt("Введите длинну стороны квадрата", "5");
a = parseInt(a);
let P = 4 * a;
alert("Периметр квадрата = " + P);
/* Задание 4*/
let r = prompt("Введите радиус окружности ", "5");
r = parseInt(r);
let S = Math.round(Math.PI * Math.pow(r, 2));
alert("Площадь окружности = " + S);
/* Задание 5*/
let l = prompt("Укажите расстояние в км", "200");
l = parseInt(l);
let t = prompt("За сколько часов добраться", "2");
t = parseInt(t);
let V = l / t;
alert("Нужно двигаться со скоростью " + Math.round(V) + " км/час ");
/* Задание 6*/
let USD = prompt("Доллары", "200");
USD = parseInt(USD);
const usdInEur = 0.91;
let EUR = USD * usdInEur;
alert("Евро " + Math.round(EUR));
/* Задание 7*/
let GB = prompt("Укажите объем флешки в Гб", "16");
GB = parseInt(GB);
let gbInMb = GB * 1024;
let numberOfFiles = gbInMb / 820;
alert(
  "Флешка помещает " + Math.floor(numberOfFiles) + " файлов размеров 820 Мб"
);
/* Задание 8*/
let wallet = prompt("Введите количество денег грн", "150");
wallet = parseInt(wallet);
let price = prompt("Укажите цену одной шоколадки грн", "24");
price = parseInt(price);
let count = wallet / price;
let remainder = wallet % price;
alert(
  "Можно купить " +
    Math.floor(count) +
    " шоколадок и останется " +
    remainder +
    " грн сдачи"
);
/* Задание 9*/
let num = prompt("Введите трехзначное число ", "234");
num = parseInt(num);
function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return result;
}

alert("Число наоборот " + getReversedNum(num));
/* Задание 10*/
let number = prompt("Введите целое число ", "5");
number = parseInt(number);
if (number % 2 === 0) {
  alert("Число чётное");
} else {
  alert("Число нечётное");
}
