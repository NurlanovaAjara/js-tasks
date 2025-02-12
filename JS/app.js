// // const userName = prompt("Как тебя зовут?");
// // console.log("Привет,", userName);

// // console.log("Привет" + " " + "Вася");
// // let input = "good";

// // console.log(input[0] + input[input.length - 1]);
// // // integer
// // let a = 15;

// // // floating point number
// // let b = 15.78654654654654654;
// // let c = -5;

// // let billion = 1_000_000_000;

// // // 9007199254740991

// // let veryBigNumber = 1234567890123456789012345678901234567890n;

// // console.log(5 + 5);
// // console.log(10 - 2);
// // console.log(2 * 2);
// // console.log(15 / 6);
// // console.log(15 % 6);
// // console.log(2 ** 3);

// // console.log((2 + 2) * 4);
// // console.log((2 * 2) / (1 + 2) - 1);

// // console.log("====");

// // let z = 2;
// // console.log(z--);
// // console.log(z);

// // console.log("==========");

// // console.log(-45 / 0);

// // console.log("abc" / 5);

// // console.log("==========");

// // console.log(4.5 + 20.45);

// // console.log((4.5 * 100 + 20.45 * 100) / 100);

// // console.log("==========");

// // console.log(Math.round(4.5));

// // console.log(Math.floor(7.98));

// // console.log(Math.ceil(70.15));

// // console.log(Math.trunc(45.22));

// // let x = 3.14568468798798;
// // console.log(x.toFixed(3));

// // console.log("=========");

// // // let input1 = prompt("Введите 1ое число:");
// // // let input2 = prompt("Введите 2ое число:");

// // // let num1 = parseFloat(input1);
// // // let num2 = parseFloat(input2);

// // // input1 = Number(input1);
// // // input2 = Number(input2);

// // // console.log(+input1 + +input2);

// // // let j = 1;

// // // j = j + 5;

// // // console.log("======");

// // // console.log("5" / 1);

// // console.log(Number(""));

// // console.log(String(10));

// // let xy = "10";

// // console.log(typeof xy);

// // console.log("======");

// // console.log(Math.floor(Math.random() * 5 + 1));

// // let min = 5;
// // let max = 10;
// // let random = Math.floor(Math.random() * (max - min + 1)) + min;
// // console.log(random);

// // console.log(Math.sqrt(9));

// // console.log(Math.pow(4, 5));

// // console.log(Math.min(2, 5, 6, 8, 1));
// // console.log(Math.max(2, 5, 6, 8, 1));

// // console.log(Math.PI.toFixed(3));

// // let number = prompt("Введите число");
// // alert(`Вы ввели число ${num}`);

// // let number = parseInt(prompt("Введите число"));

// // let prev = number - 1;
// // let next = number + 1;

// // console.log(`Число: ${number} \n След: ${next} \n Пред: ${prev}`);

// // let x = Number(prompt("Введите x:"));

// // let y = 17 * x ** 2 - 6 * x + 13;

// // console.log(y);

// // let sideOfsqr = Number(prompt("Введите сторону квадрата:"));
// // let perimetr = sideOfsqr * 4;
// // console.log(perimetr);

// // let soup = 1 * (10 * 100);
// // let burger = 3 * (8 * 100);
// // let icecream = 1 * (5 * 100);

// // let total = (soup + burger + icecream) / 100;
// // console.log(total);
// // Операторы сравнения

// // >
// // console.log(10 > 8);
// // console.log(10 < 8);
// // console.log(10 >= 8);
// // console.log(10 <= 8);
// // // console.log(10 == "10");
// // console.log(10 === "10");
// // // console.log(10 != "10");
// // console.log(10 !== "10");

// // console.log("aa" === "Ab");

// // let age = 18;
// // if (age >= 18) {
// //   console.log("Доступ есть!");
// // } else {
// //   console.log("Доступа нет!");
// // }

// // let day = "friday";

// // if (day === "monday") {
// //   console.log("Learning!");
// // } else if (day === "wednesday") {
// //   console.log("Learning!");
// // } else if (day === "friday") {
// //   console.log("Learning!");
// // } else {
// //   console.log("Rest!");
// // }

// // let age = 17;
// // if (age >= 18) {
// //   console.log("Доступ есть!");
// // } else {
// //   console.log("Доступа нет!");
// // }

// // console.log(age >= 18 ? "Доступ есть!" : "Доступа нет!");

// // OR = ||, AND = &&, NOT = !

// // let money = 0;
// // let shop = true;

// // if (money >= 100 || shop === true) {
// //   console.log("Cola!");
// // } else {
// //   console.log("No Cola!");
// // }

// // console.log(!shop);

// // let имя = "mirlan";
// // console.log(имя);

// // 1. Дано расстояние в сантиметрах. Найти число полных метров в нем

// // let inputInCM = 180;
// // let resultInMeters = 180 / 100;

// // console.log(resultInMeters);

// // 2. Дана масса в килограммах. Найти число полных центнеров в ней.
// // let inputInWeight = 100;
// // let resultInCentner = inputInWeight / 100;
// // console.log(resultInCentner);

// // 3. Определить максимальное и минимальное значения из двух различных вещественных чисел. Использовать один условный оператор.

// // let a = 10;
// // let b = 15;
// // if (a > b) {
// //   console.log(a);
// // } else {
// //   console.log(b);
// // }
// // if (a < b) {
// //   console.log(a);
// // } else {
// //   console.log(b);
// // }

// //4. Если целое число m делится нацело на целое число n, то вывести на экран частное от деления, в противном случае вывести сообщение «m на n нацело не делится».
// // let m = 15;
// // let n = 3;

// // if (m % n === 0) {
// //   console.log(m / n);
// // } else {
// //   console.log("m на n нацело не делится");
// // }

// // 5. Дано натуральное число. Определить:
// //    а) является ли оно четным;

// // let x = 108;

// // if (x % 2 === 0) {
// //   console.log("четное число");
// // } else {
// //   console.log("число нечетное");
// // }

// // 6. Напишите программу, которая запрашивает у пользователя текущее время (в часах, от 0 до 23) и выводит:
// //    Если время от 0 до 5 включительно: "Доброй ночи".
// //    Если время от 6 до 11 включительно: "Доброе утро".
// //    Если время от 12 до 17 включительно: "Добрый день".
// //    Если время от 18 до 23 включительно: "Добрый вечер".
// //    Если введено некорректное значение (меньше 0 или больше 23), вывести: "Некорректное время".
// // let time = 14;

// // if (time >= 0 && time <= 5) {
// //   console.log("Доброй ночи");
// // } else if (time >= 6 && time <= 11) {
// //   console.log("Доброе утро");
// // } else if (time >= 12 && time <= 17) {
// //   console.log("Добрый день");
// // } else if (time >= 18 && time <= 23) {
// //   console.log("Добрый вечер");
// // } else {
// //   console.log("Не корректное время!");
// // }

// // 7. Напишите программу, которая запрашивает у пользователя логин и пароль и проверяет их корректность.
// //    Логин должен быть admin.
// //    Пароль должен быть 12345.
// //    Если логин или пароль неверный, вывести сообщение: "Ошибка: неверный логин или пароль".
// //    Если логин и пароль верные, вывести: "Добро пожаловать!".

// // const login = prompt("Введите имя пользователя:");
// // const password = prompt("Введите пароль:");

// // if (login === "admin" && password === "12345") {
// //   console.log("Добро пожаловать");
// // } else {
// //   console.log("Ошибка: неверный логин или пароль");
// // }

// // 8. Напишите программу, которая запрашивает у пользователя число и проверяет:
// //    Если число находится в диапазоне от 10 до 20 включительно, вывести: "Число в допустимом диапазоне".
// //    Если число меньше 10 или больше 20, вывести: "Число вне диапазона".

// // let number = prompt("Введите число от 10 до 20");

// // if (number >= 10 && number <= 20) {
// //   console.log(`Число в допустимом диапазоне ${number}`);
// // } else {
// //   console.log(`Число вне диапазона ${number}`);
// // }

// // 9. Даны три вещественных числа a, b, c. Проверить:
// //    выполняется ли неравенство a < b < c;
// // let a = 8;
// // let b = 6;
// // let c = 8;
// // if (a < b && b < c) {
// //   console.log("да");
// // } else {
// //   console.log("нет");
// // }

// // 10. В один из жарких летних дней Петя и его друг Вася решили купить арбуз. Они выбрали самый большой и самый спелый, на их взгляд. После недолгой процедуры взвешивания весы показали w килограмм. Поспешно прибежав домой, изнемогая от жажды, ребята начали делить приобретенную ягоду, однако перед ними встала нелегкая задача. Петя и Вася являются большими поклонниками четных чисел, поэтому хотят поделить арбуз так, чтобы доля каждого весила именно четное число килограмм, при этом не обязательно, чтобы доли были равными по величине. Ребята очень сильно устали и хотят скорее приступить к трапезе, поэтому Вы должны подсказать им, удастся ли поделить арбуз, учитывая их пожелание. Разумеется, каждому должен достаться кусок положительного веса.
// //     Выведите YES, если ребята смогут поделить арбуз на две части, каждая из которых весит четное число килограмм, и NO в противном случае.
// // let w = 101;
// // if (w > 2 && w % 2 === 0) {
// //   console.log("YES");
// // } else {
// //   console.log("NO");
// // }
// // Switch

// // let day = "friday";

// // switch (day) {
// //   case "monday":
// //   case "tuesday":
// //   case "wednesday":
// //   case "thursday":
// //   case "friday":
// //     console.log("Work!");
// //     break;
// //   case "saturday":
// //   case "sunday":
// //     console.log("Weekend");
// //     break;
// //   default:
// //     console.log("Не корректный день недели!");
// // }

// // if (day === "monday") {
// //   console.log("Work!");
// // } else if (day === "tuesday") {
// //   console.log("Work again!");
// // } else if (day === "wednesday") {
// //   console.log("Work again!");
// // } else if (day === "thursday") {
// //   console.log("Work again!");
// // } else if (day === "friday") {
// //   console.log("Work again!");
// // } else if (day === "saturday") {
// //   console.log("Weekend");
// // } else if (day === "sunday") {
// //   console.log("Weekend");
// // } else {
// // console.log("Unknown day")}

// // let ivansFriend = "John";
// // let ivansFriend2 = "Bob";

// // Массив = Array

// // const ivansFriends = [
// //   "John",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Adil",
// //   "Bekzat",
// // ];

// // console.log(ivansFriends.length);
// // console.log(ivansFriends[3]);
// // console.log(ivansFriends[ivansFriends.length - 1]);

// // Добавление в массив (в конец)
// // const ivansFriends = [];
// // console.log(ivansFriends);

// // ivansFriends.push("John");
// // console.log(ivansFriends);

// // ivansFriends.push("Bob");
// // console.log(ivansFriends);

// // // Добавление в начало массива
// // ivansFriends.unshift("Tom");
// // console.log(ivansFriends);

// // let friends = new Array("John", "Bob", "Tom", "Alice");

// // console.log(friends);

// // let prices = [1, 2, 3, 4, 50.45, 6, 7, 8, 9, 10];

// // let matrix = [
// //   [1, [2], 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// // let user = ["John", 20, true];

// // const ivansFriends = [
// //   "John",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Adil",
// //   "Bekzat",
// // ];
// // console.log(ivansFriends);

// // ivansFriends.pop();
// // console.log(ivansFriends);

// // ivansFriends.pop();
// // console.log(ivansFriends);

// // ivansFriends.shift();
// // console.log(ivansFriends);

// // ivansFriends[2] = "Kamchybek";
// // console.log(ivansFriends);

// // const ivansFriends = [
// //   "John",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Adil",
// //   "Bekzat",
// // ];
// // console.log(ivansFriends);

// // const joined = ivansFriends.join(", ");

// // console.log(joined);

// // Loops = Цикл

// // while
// // let i = 200;

// // while (i >= 0) {
// //   // console.log(i);
// //   console.log("Hello");
// //   i--;
// // }

// // do while
// // let i = -2;

// // do {
// //   console.log(i);
// //   i--;
// // } while (i >= 0);

// // for
// // for (let i = 10; i >= 0; i--) {
// //   console.log(i);
// // }

// // const ivansFriends = [
// //   "John",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Adil",
// //   "Bekzat",
// //   "Kamchybek",
// // ];

// // for (let i = 0; i < ivansFriends.length; i++) {
// //   console.log(ivansFriends[i]);
// // }

// // for (let i = 0; i <= 20; i++) {
// //   // if (i % 2 === 0) {
// //   //   console.log(i);
// //   // }

// //   if (i === 5) {
// //     // break;
// //     // continue;
// //   }

// //   console.log(i);
// // }

// // for ... of

// // const books = [
// //   "John",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Bob",
// //   "Alice",
// //   "Tom",
// //   "Adil",
// //   "Bekzat",
// //   "Kamchybek",
// // ];

// // for (book of books) {
// //   console.log(book);
// // }

// // const books = [
// //   // "John",
// //   // "Bob",
// //   // "Alice",
// //   // "Tom",
// //   // "Bob",
// //   // "Alice",
// //   // "Tom",
// //   // "Adil",
// //   // "Bekzat",
// //   // "Kamchybek",
// //   23, 45, 20, 12, 1, 0, 125,
// // ];

// // const sortedBooks = books.sort();
// // console.log(sortedBooks);

// // # Задачи

// // 1. Напишите программу, которая запрашивает номер месяца (1–12) и с помощью оператора switch выводит название времени года (зима, весна, лето, осень).

// let month = 14;
// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Autumn");
//     break;
//   default:
//     console.log("Error");
// }

// // 2. Создайте программу, которая принимает число от 1 до 7, соответствующее дню недели, и выводит название дня недели (например, 1 — понедельник) с использованием switch.
// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Понедельник");
//     break;
//   case 2:
//     console.log("Вторник");
//     break;
//   case 3:
//     console.log("Среда");
//     break;
//   case 4:
//     console.log("Четверг");
//     break;
//   case 5:
//     console.log("Пятница");
//     break;
//   case 6:
//     console.log("Суббота");
//     break;
//   case 7:
//     console.log("Воскресенье");
//     break;
//   default:
//     console.log("Error");
// }


// function sayHell



// high order function- функции высшего порядка

// Switch
// let day = "friday";
// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log("Work!");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Не корректный день недели!");
// }
// if (day === "monday") {
//   console.log("Work!");
// } else if (day === "tuesday") {
//   console.log("Work again!");
// } else if (day === "wednesday") {
//   console.log("Work again!");
// } else if (day === "thursday") {
//   console.log("Work again!");
// } else if (day === "friday") {
//   console.log("Work again!");
// } else if (day === "saturday") {
//   console.log("Weekend");
// } else if (day === "sunday") {
//   console.log("Weekend");
// } else {
// console.log("Unknown day")}
// let ivansFriend = "John";
// let ivansFriend2 = "Bob";
// Массив = Array
// const ivansFriends = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
// ];
// console.log(ivansFriends.length);
// console.log(ivansFriends[3]);
// console.log(ivansFriends[ivansFriends.length - 1]);
// Добавление в массив (в конец)
// const ivansFriends = [];
// console.log(ivansFriends);
// ivansFriends.push("John");
// console.log(ivansFriends);
// ivansFriends.push("Bob");
// console.log(ivansFriends);
// // Добавление в начало массива
// ivansFriends.unshift("Tom");
// console.log(ivansFriends);
// let friends = new Array("John", "Bob", "Tom", "Alice");
// console.log(friends);
// let prices = [1, 2, 3, 4, 50.45, 6, 7, 8, 9, 10];
// let matrix = [
//   [1, [2], 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let user = ["John", 20, true];
// const ivansFriends = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
// ];
// console.log(ivansFriends);
// ivansFriends.pop();
// console.log(ivansFriends);
// ivansFriends.pop();
// console.log(ivansFriends);
// ivansFriends.shift();
// console.log(ivansFriends);
// ivansFriends[2] = "Kamchybek";
// console.log(ivansFriends);
// const ivansFriends = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
// ];
// console.log(ivansFriends);
// const joined = ivansFriends.join(", ");
// console.log(joined);
// Loops = Цикл
// while
// let i = 200;
// while (i >= 0) {
//   // console.log(i);
//   console.log("Hello");
//   i--;
// }
// do while
// let i = -2;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);
// for
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// const ivansFriends = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
//   "Kamchybek",
// ];
// for (let i = 0; i < ivansFriends.length; i++) {
//   console.log(ivansFriends[i]);
// }
// for (let i = 0; i <= 20; i++) {
//   // if (i % 2 === 0) {
//   //   console.log(i);
//   // }
//   if (i === 5) {
//     // break;
//     // continue;
//   }
//   console.log(i);
// }
// for ... of
// const books = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
//   "Kamchybek",
// ];
// for (book of books) {
//   console.log(book);
// }
// const books = [
//   // "John",
//   // "Bob",
//   // "Alice",
//   // "Tom",
//   // "Bob",
//   // "Alice",
//   // "Tom",
//   // "Adil",
//   // "Bekzat",
//   // "Kamchybek",
//   23, 45, 20, 12, 1, 0, 125,
// ];
// const sortedBooks = books.sort();
// console.log(sortedBooks);



// для каждого массива вызывает отдельную переданную функцию

// const users = ["John","bob","MaRia","almaz"];

// users.toUpperCase((userName, i) =>{
//     console.log(users.trim);
// });
// const sentence = 'The,quick, brown ,fox ,jumps ,over ,the ,lazy, dog.';

// console.log(sentence.toUpperCase());

// const users = ["John","bob","MaRia","almaz"];

// users.forEach((user) =>{}
   

// })

// const users = ["John","bob","MaRia","almaz"];
// users.forEach((users)=>{
//     console.log(users.trim().tolowerCase());
// }
// );

// const numbersString = ["45","29","12","5","3"];

// const realNumbers = numbersString.map(Number);
// console.log(realNumbers);


// const userNames = ["Bob","Vasya","Adil","Beknazar","Milana","Aiturgan"]
// const namesStartingWithA = userNames.filter(
//     (userName) => userName.trim().toLowerCase().charAt(0)=== "a"
// );
// console.log(namesStartingWithA);

// hometasks 30.01

// Дано число. Выведите в консоль первую цифру этого числа.

//    let num = "4567";
//    let str = num.toString();
//    console.log(str[0]);

// Дано число. Выведите в консоль последнюю цифру этого числа.

// let num = "8907";
// let str = num.toString();
// console.log(str[str.length - 1]);

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// let num = "2008";

// let firstNum = Number.toString();
// let firstNumb = parselnt(firstNum[0]);
// let lastNum = parselnt(firstNum[firstNum.length - 1]);

// let sum = firstNum + lastNum;
// console.log(sum);


// Дано число. Выведите количество цифр в этом числе.

// let num = "200808";
// console.log(num.toString().length);
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.



// №1

// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
//  let str = "academy";

// if (str.length > 1) {
//     console.log(str[str.length - 2]);
// } else {
//     console.log("не хватает символов");
// }


// №2

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// let a = "20";
// let b = "2";

// if (b !== 0 && a % b === 0) {
//     console.log("Да");
// } else {
//     console.log("Нет");
// }


//№1

// Выведите в консоль все целые числа от 1 до 100.

// №2

// Выведите в консоль все целые числа от -100 до 0.

// №3

// Выведите в консоль все целые числа от 100 до 1.

// №4

// Выведите в консоль все четные числа из промежутка от 1 до 100.

// №5

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.





// const taskText =
//   "Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.";

// const h1 = document.getElementById("task");
// h1.innerText = taskText;
// const label = document.getElementById("input-label");
// label.innerText = "Введите строку";
// const button = document.getElementById("submitBtn");
// button.addEventListener("click", function () {
//   const input = document.getElementById("user-input").value;
//   const result = document.getElementById("result");
//   if (input.length > 1) {
//     result.innerText = input.slice(-2, -1);
//   } else {
//     result.innerText = "Ошибка введите нормальный текст";
//   }
// });


// const p = document.querySelector(".myClass");

// p.innerText = "Hello";

// console.log(p);




// const img = document.querySelector("Img");
// img.alt = "Яблоко";
// console.dir(img);



// button.setAttribute("Старое изображение", "Яблоко"); 
// button.removeAttribute("Старое изображение"); 

// console.log(setAttribute);

// const active = document.querySelector("button");
// link.classList
// btn.addEventListener("click",function() {
//   btn.classList.toggle("active");
// });


//  button.addEventListener("click",function() {
//     const input = document.getElementById("user-input").value;
//     const result = document.getElementById("result").value;

//     const a = Number(document.getElementById("a").value);
//     const b = Number(document.getElementById("b").value);
    

//     if (b !== 0 && a % b === 0) {
//         result.innerText = "Да";
//     } else {
//         result.innerText = "Нет";
//     }

//  });

 
//  button.addEventListener("click", function () {
//    const number1 = Number(document.getElementById("number1").value);
 
//    const number2 = Number(document.getElementById("number2").value);
//    result.innerText = `${number1 % number2}`;
//  });







// // Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// const array = [1, 2, 3, 4, 5];
// const sumOfSquares = array.reduce((acc, num) => acc + num ** 2, 0);
// console.log("Сумма квадратов элементов массива:", sumOfSquares);


// №2

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// const array = [1, 4, 9, 16, 25];
// const sumOfSquareRoots = array.reduce((acc, num) => acc + Math.sqrt(num), 0);
// console.log("Сумма квадратных корней элементов массива:", sumOfSquareRoots);

// №3

// Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const array = [-17, 3, 2, -1, 10, -8];
// const sumOfPositives = array.reduce((acc, num) => {
//   if (num > 0) {
//     return acc + num;
//   }
//   return acc;
// }, 0);

// console.log("Сумма положительных элементов массива:", sumOfPositives);

// №4

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// const array = [-3, 2, 5, 0, 9, 11, 10, 7];
// const sum = array.reduce((acc, num) => {
//   if (num > 0 && num < 10) {
//     return acc + num;
//   }
//   return acc;
// }, 0);

// console.log("Сумма элементов, которые больше нуля и меньше десяти:", sum);


// №1

// Дана строка:

// 'abcde'
// Получите массив букв этой строки.
// const str = 'abcde';
// const letters = [...str];
// console.log(letters); 

// №2

// Дано некоторое число:

// 12345
// Получите массив цифр этого числа.
// const num = 12345;
// const letters = num.toString().split('').map(Number);
// console.log(letters); 

// №3

// Дано некоторое число:

// 12345
// Переверните его:
// const num = 12345;
// const reversedNumber = Number(num.toString().split('').reverse().join(''));
// console.log(reversedNumber);

// 54321
// №4

// Дано некоторое число:

// 12345
// Найдите сумму цифр этого числа.

// const num = 12345;
// const sum = num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
// console.log("Сумма цифр числа:", sum);


"use strict";
// №1

// Создайте переменную a со значением 10 и переменную b со значением 2. Выведите на экран их сумму,
//  разность, произведение и частное (результат деления).
// const a ="10";
// const b = "2";

// console.log("Сумма:", a + `b`);
// console.log("Разность:", a - b);
// console.log("Произведение:", a * b);
// console.log("Частное:", a / b);


// №2

// Создайте переменную c со значением 10 и переменную d со значением 5
// . Просуммируйте их, а результат присвойте переменной
//  result. Выведите на экран значение переменной result.

// №3


// Создайте переменную a со значением 1, переменную b со значением 2 и переменную c со значением 3. Выведите на экран их сумму.

// №4


// Создайте переменную a со значением 10 и переменную b со значением 5. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d,
//  а результат запишите в переменную result. Выведите на экран значение переменной result.

// const a = parseInt("5px");
// const b = parseInt("6px");
// console.log(a + b);

// let a = parseFloat("6.25px");
// let b = parseFloat("5.5px");
// console.log(a + b );

// let num1 = 5;
// let num2 = 50;
// console.log(String(num2) + String(num1));


// let str = "abcde";
// console.log(str[0],str[2],str[4]);

// const num =  'abcde';
//  const reversedNumber = Number(num.toString().split('').reverse().join(''));
//  console.log(reversedNumber);


//  const str =  "abcde";
//  const num = 3;

//  console.log(str[num]);



// Создайте переменную num и присвойте ей значение 123.
//  Выведите значение этой переменной на экран с помощью функции alert.
// const num = 123;
// console.log(num);

// let a = 1;
// let b = 2;
// let c = 3;

// console.log(c);
// Создайте переменную a. Запишите в нее значение 10,
//  выведите его на экран. Затем запишите в нее значение 20, выведите его на экран.
// let a;  
// a = 10;    
// alert(a); 

// a = 20;    
// alert(a); 

// Создайте переменную a. Запишите в нее сумму чисел
//  1, 2 и 3. С помощью функции alert выведите на экран содержимое переменной a.
// let a = 1 + 2 + 3;
// alert(a);


// Создайте переменную a со значением 10 и переменную b со значением 2.
//  Выведите на экран их сумму, разность, произведение и частное (результат деления).
// const a = 10;
// const b = 2;
//  console.log("Сумма:", a + b);
//  console.log("Разность:", a - b);
//  console.log("Произведение:", a * b);
//  console.log("Частное:", a / b);

// Создайте переменную c со значением 10 и переменную d со значением 5.
//  Просуммируйте их, а результат присвойте переменной result.
//  Выведите на экран значение переменной result.

// const c = 10;
// const d = 5;
// console.log(c + d);

// Создайте переменную a со значением 1,
//  переменную b со значением 2 и переменную c со значением 3. Выведите на экран их сумму.
//  const b = 2;
//  const c = 3;
// console.log(b + c);
// Создайте переменную a со значением 10 и переменную b со значением 5. Отнимите от a 
// переменную b и результат присвойте переменной c. Затем создайте переменную d,
//  присвойте ей значение 7. Сложите переменные c и d, а 
// результат запишите в переменную result. Выведите на экран значение переменной result.

// const a = 10;
// const b = 5;
// const c = a - b; 
// const d = 7;
// const result = c + d; 

// console.log("Значение переменной result:", result);

// Запишите в переменную a число 1.5, а в переменную b 
// - число 0.75. Найдите сумму значений этих переменных и выведите ее на экран.
// const a = 1.5;
// const b = 0.75;
// const sum = a + b;
// console.log("Сумма значений переменных:", sum);

// Создайте переменную a со значением -100. Выведите это значение на экран.
// const a = -100;
// console.log(a);

// Создайте переменную a, запишите в нее какое-нибудь положительное или 
// отрицательное число. Выведите на экран это число с обратным знаком.
// const a = 8; 
// const reversed = -a;
// console.log("Число с обратным знаком:", reversed);

// Найдите остаток от деления следующих переменных:

// let a = 13;
// let b = 5;
// let remainder = a % b;
// console.log(remainder);

// Возведите число 2 в 10-ю степень. Выведите результат на экран.
// const result = 2 ** 10; 
// console.log(result); 

// // Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные на экран.
// const firstName = 'Ажара';  
// const lastName = 'Нурланбекова';   
// console.log(firstName);
// console.log(lastName);

// Создайте переменную str и присвойте ей строку '!!!'. Выведите значение этой 
// переменной на экран.
// const str = '!!!';
// console.log(str);

// // Создайте переменную с текстом 'java' и переменную с текстом 'script'. 
// // С помощью этих переменных и операции сложения строк выведите на экран строку 'javascript'.

// const b = 'java';
// const c = 'script';
// console.log(b + c);

// // Создайте переменную с текстом 'hello' 
// // и переменную с текстом 'world'. С помощью этих переменных и операции 
// // сложения строк выведите на экран строку 'hello world'.

// const hello = 'hello';
// const world = 'world';
// console.log(hello + ' ' + world); 
// Запишите в переменную какую-нибудь строку. Выведите на экран длину вашей строки.
// const str = 'ayana';
// console.log(str.length);

// // Объявите переменную,
// //  не задавая ей значения. Выведите значение созданной переменной на экран.

// let a;
// console.log(a);

// let a = null;
// console.log(a);

// // Присвойте переменной значение true. Выведите эту переменную на экран.


// let myVar = true;
// console.log(myVar);
// // Присвойте переменной значение false. Выведите эту переменную на экран.

// myVar = false;
// console.log(myVar);

// Сделайте две строки. Перемножьте их друг на друга. Выведите результат умножения на экран.
console.log('abc' * 3);