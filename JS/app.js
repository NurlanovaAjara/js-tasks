// const userName = prompt("Как тебя зовут?");
// console.log("Привет,", userName);

// console.log("Привет" + " " + "Вася");
// let input = "good";

// console.log(input[0] + input[input.length - 1]);
// // integer
// let a = 15;

// // floating point number
// let b = 15.78654654654654654;
// let c = -5;

// let billion = 1_000_000_000;

// // 9007199254740991

// let veryBigNumber = 1234567890123456789012345678901234567890n;

// console.log(5 + 5);
// console.log(10 - 2);
// console.log(2 * 2);
// console.log(15 / 6);
// console.log(15 % 6);
// console.log(2 ** 3);

// console.log((2 + 2) * 4);
// console.log((2 * 2) / (1 + 2) - 1);

// console.log("====");

// let z = 2;
// console.log(z--);
// console.log(z);

// console.log("==========");

// console.log(-45 / 0);

// console.log("abc" / 5);

// console.log("==========");

// console.log(4.5 + 20.45);

// console.log((4.5 * 100 + 20.45 * 100) / 100);

// console.log("==========");

// console.log(Math.round(4.5));

// console.log(Math.floor(7.98));

// console.log(Math.ceil(70.15));

// console.log(Math.trunc(45.22));

// let x = 3.14568468798798;
// console.log(x.toFixed(3));

// console.log("=========");

// // let input1 = prompt("Введите 1ое число:");
// // let input2 = prompt("Введите 2ое число:");

// // let num1 = parseFloat(input1);
// // let num2 = parseFloat(input2);

// // input1 = Number(input1);
// // input2 = Number(input2);

// // console.log(+input1 + +input2);

// // let j = 1;

// // j = j + 5;

// // console.log("======");

// // console.log("5" / 1);

// console.log(Number(""));

// console.log(String(10));

// let xy = "10";

// console.log(typeof xy);

// console.log("======");

// console.log(Math.floor(Math.random() * 5 + 1));

// let min = 5;
// let max = 10;
// let random = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(random);

// console.log(Math.sqrt(9));

// console.log(Math.pow(4, 5));

// console.log(Math.min(2, 5, 6, 8, 1));
// console.log(Math.max(2, 5, 6, 8, 1));

// console.log(Math.PI.toFixed(3));

// let number = prompt("Введите число");
// alert(`Вы ввели число ${num}`);

// let number = parseInt(prompt("Введите число"));

// let prev = number - 1;
// let next = number + 1;

// console.log(`Число: ${number} \n След: ${next} \n Пред: ${prev}`);

// let x = Number(prompt("Введите x:"));

// let y = 17 * x ** 2 - 6 * x + 13;

// console.log(y);

// let sideOfsqr = Number(prompt("Введите сторону квадрата:"));
// let perimetr = sideOfsqr * 4;
// console.log(perimetr);

// let soup = 1 * (10 * 100);
// let burger = 3 * (8 * 100);
// let icecream = 1 * (5 * 100);

// let total = (soup + burger + icecream) / 100;
// console.log(total);
// Операторы сравнения

// >
// console.log(10 > 8);
// console.log(10 < 8);
// console.log(10 >= 8);
// console.log(10 <= 8);
// // console.log(10 == "10");
// console.log(10 === "10");
// // console.log(10 != "10");
// console.log(10 !== "10");

// console.log("aa" === "Ab");

// let age = 18;
// if (age >= 18) {
//   console.log("Доступ есть!");
// } else {
//   console.log("Доступа нет!");
// }

// let day = "friday";

// if (day === "monday") {
//   console.log("Learning!");
// } else if (day === "wednesday") {
//   console.log("Learning!");
// } else if (day === "friday") {
//   console.log("Learning!");
// } else {
//   console.log("Rest!");
// }

// let age = 17;
// if (age >= 18) {
//   console.log("Доступ есть!");
// } else {
//   console.log("Доступа нет!");
// }

// console.log(age >= 18 ? "Доступ есть!" : "Доступа нет!");

// OR = ||, AND = &&, NOT = !

// let money = 0;
// let shop = true;

// if (money >= 100 || shop === true) {
//   console.log("Cola!");
// } else {
//   console.log("No Cola!");
// }

// console.log(!shop);

// let имя = "mirlan";
// console.log(имя);

// 1. Дано расстояние в сантиметрах. Найти число полных метров в нем

// let inputInCM = 180;
// let resultInMeters = 180 / 100;

// console.log(resultInMeters);

// 2. Дана масса в килограммах. Найти число полных центнеров в ней.
// let inputInWeight = 100;
// let resultInCentner = inputInWeight / 100;
// console.log(resultInCentner);

// 3. Определить максимальное и минимальное значения из двух различных вещественных чисел. Использовать один условный оператор.

// let a = 10;
// let b = 15;
// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }
// if (a < b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

//4. Если целое число m делится нацело на целое число n, то вывести на экран частное от деления, в противном случае вывести сообщение «m на n нацело не делится».
// let m = 15;
// let n = 3;

// if (m % n === 0) {
//   console.log(m / n);
// } else {
//   console.log("m на n нацело не делится");
// }

// 5. Дано натуральное число. Определить:
//    а) является ли оно четным;

// let x = 108;

// if (x % 2 === 0) {
//   console.log("четное число");
// } else {
//   console.log("число нечетное");
// }

// 6. Напишите программу, которая запрашивает у пользователя текущее время (в часах, от 0 до 23) и выводит:
//    Если время от 0 до 5 включительно: "Доброй ночи".
//    Если время от 6 до 11 включительно: "Доброе утро".
//    Если время от 12 до 17 включительно: "Добрый день".
//    Если время от 18 до 23 включительно: "Добрый вечер".
//    Если введено некорректное значение (меньше 0 или больше 23), вывести: "Некорректное время".
// let time = 14;

// if (time >= 0 && time <= 5) {
//   console.log("Доброй ночи");
// } else if (time >= 6 && time <= 11) {
//   console.log("Доброе утро");
// } else if (time >= 12 && time <= 17) {
//   console.log("Добрый день");
// } else if (time >= 18 && time <= 23) {
//   console.log("Добрый вечер");
// } else {
//   console.log("Не корректное время!");
// }

// 7. Напишите программу, которая запрашивает у пользователя логин и пароль и проверяет их корректность.
//    Логин должен быть admin.
//    Пароль должен быть 12345.
//    Если логин или пароль неверный, вывести сообщение: "Ошибка: неверный логин или пароль".
//    Если логин и пароль верные, вывести: "Добро пожаловать!".

// const login = prompt("Введите имя пользователя:");
// const password = prompt("Введите пароль:");

// if (login === "admin" && password === "12345") {
//   console.log("Добро пожаловать");
// } else {
//   console.log("Ошибка: неверный логин или пароль");
// }

// 8. Напишите программу, которая запрашивает у пользователя число и проверяет:
//    Если число находится в диапазоне от 10 до 20 включительно, вывести: "Число в допустимом диапазоне".
//    Если число меньше 10 или больше 20, вывести: "Число вне диапазона".

// let number = prompt("Введите число от 10 до 20");

// if (number >= 10 && number <= 20) {
//   console.log(`Число в допустимом диапазоне ${number}`);
// } else {
//   console.log(`Число вне диапазона ${number}`);
// }

// 9. Даны три вещественных числа a, b, c. Проверить:
//    выполняется ли неравенство a < b < c;
// let a = 8;
// let b = 6;
// let c = 8;
// if (a < b && b < c) {
//   console.log("да");
// } else {
//   console.log("нет");
// }

// 10. В один из жарких летних дней Петя и его друг Вася решили купить арбуз. Они выбрали самый большой и самый спелый, на их взгляд. После недолгой процедуры взвешивания весы показали w килограмм. Поспешно прибежав домой, изнемогая от жажды, ребята начали делить приобретенную ягоду, однако перед ними встала нелегкая задача. Петя и Вася являются большими поклонниками четных чисел, поэтому хотят поделить арбуз так, чтобы доля каждого весила именно четное число килограмм, при этом не обязательно, чтобы доли были равными по величине. Ребята очень сильно устали и хотят скорее приступить к трапезе, поэтому Вы должны подсказать им, удастся ли поделить арбуз, учитывая их пожелание. Разумеется, каждому должен достаться кусок положительного веса.
//     Выведите YES, если ребята смогут поделить арбуз на две части, каждая из которых весит четное число килограмм, и NO в противном случае.
// let w = 101;
// if (w > 2 && w % 2 === 0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }