// let a = 5,
//     b = 3,
//     op = "*"

// let a = 10
// console.log(a++);//10
// console.log(++a);//12




// for operators
// while
// // do While
//  for of
// for in


// foreach methods


// rekursive func




// let count = 0
// function customLoop() {
//     if (count < 100) {
//         console.log(count);
//         count++
//         return;
//         customLoop()
//     }
// }

// customLoop()


// let a = 10
// while (a > 0) {
//     console.log(a);
// }

// if (a > 0) {
//     console.log(a);
// }


// let fullName = "Murad Orucov";
// let result = "Reqem yoxdur";

// let i = 0;
// while (i < fullName.length) {
// if ((fullName[i] >= 0 || fullName[i] <= 9) && fullName[i] != " ") {
//     result = "Reqem var"
// }
// if (nber(fullName[i]) || fullName[i] === "0") {
//     result = "Reqem var"
// }
//     if (!isNaN(fullName[i]) && fullName[i] !== " ") {
//         result = "Reqem var"
//     }
//     i++;
// }

// console.log(result);



// let a = 0;
// while (a < 10) {
//     console.log(a);
//     a++
// }



// for (let a = 0; a < 10; a++) {
//     console.log(a);
// }

// let a = "test"
// a.length
// "12321" "ata" "ana" ""

// let value = "kelek";
// value.split("").reverse().join()
// let result = "Palendrom deyerdir!"
// let reverseText = "";
// for (let i = value.length - 1; i >= 0; i--) {
//     reverseText += value[i]
// }

// if (reverseText !== value) {
//     result = "Palendrom deyil!"
// }

// console.log(result);


// for (let i = 0; i < value.length; i++) {

//     if (value[i] !== value[value.length - 1 - i]) {
//         result = "Palendrom deyil!"
//         break;
//     }
// }

// console.log(result);


// let text = "lorem Dunya";
// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);
// }
// for (let i in text) {
//     console.log(text[i]);
// }

// for (let i of text) {
//     console.log(i);
// }


// let hasil = 1

// for (let i = 1; i <= 4; i++) {
//     hasil *= i

// }
// console.log(hasil);


// while

// let n = 75;
// while (n > 1) {
//     let j = n;
//     let cnt = 0;
//     while (j > 0) {
//         if (!(n % j)) {
//             cnt++;
//         }
//         j--
//     }
//     if (cnt === 2) {
//         console.log(n);
//     }
//     n--
// getSayHello()
// }

// decleration
// expressions
// parametrli func
// void func
// return func
// rekrusive func



// closure
// block scope
// parametr / argument

// invocked
// var getSayHello;
// getSayHello()
// getSayHello = function () {
//     console.log("Salam Millet!");
// }
// let balance = "900 AZN";

// function getBalance() {
//     // return balance;

//     if (condition) {
//         return
//     }else{
//         return
//     }

//     function name(params) {

//     }
// }

// function getSayHello(name,bal) {
//     console.log(`Salam ${name}, sizin balasiniz ${bal} qederdir!`);
// }

// getSayHello("Murad",getBalance())

// console.log(getBalance());




// function otherFunc() {
//     let cnt = 10;
//     return function innerFunc() {
//         cnt++;
//         console.log(cnt);
//     }
// }
// let f1 = otherFunc()
// f1()
// f1()
// f1()
// f1()
// f1()




// console.log(a);

// otherFunc()

// function otherFunc() {
//     let a = 45;
// }



// let a = 10;
// function otherFunc() {
//     a = 15
//     console.log(a);

//     function innerFunc(params) {
//         let a = 145
//         console.log(a);

//     }
// }
// otherFunc()
// console.log(a);

// let a = 5
// function otherFunc() {
//     let a = 10
//     console.log(a);

// }
// otherFunc()
// console.log(a);


// function calc(a, b, c) {
//     switch (c) {
//         case "+":
//             return a + b
//         case "-":
//             return a - b;
//         case "/":
//             return a / b;
//         case "*":
//             return a * b
//         default:
//             return "Yanlish deger!"
//     }
// }

// console.log(calc(10, 11, "+"));
// console.log(calc(10, 11, "-"));
// console.log(calc(10, 11, "/"));
// console.log(calc(10, 11, "*"));

// let usd = 900; //=> 900*75 =xxxxx
// let rubl = 20000;
// let ex = 75; /// 1usd => 75rubl

// function exchange(rubl, usd) {
//     let result = rubl + (usd * 75)
//     console.log(result);

// }

// exchange(700, 100)

// function numberToText(num) {
//     if (num.length === 1) {
//         return oneDigit(num)
//     } else if (num.length === 2 && num[1] === "0") {
//         return tenDigit(num[0]);
//     } else if (num.length === 2 && num[1] !== "0") {
//         return tenDigit(num[0]) + " " + oneDigit(num[1]);
//     }
// }

// console.log(numberToText("88"));


// function oneDigit(num) {
//     switch (num) {
//         case "1":
//             return "Bir";
//         case "2":
//             return "Iki";
//         case "3":
//             return "Uc";
//         case "4":
//             return "Dord";
//         case "5":
//             return "Bes";
//         case "6":
//             return "Alti";
//         case "7":
//             return "Yeddi";
//         case "8":
//             return "Sekkiz";
//         case "9":
//             return "Doqquz";
//     }
// }

// function tenDigit(num) {
//     switch (num) {
//         case "1":
//             return "On";
//         case "2":
//             return "Iyirmi";
//         case "3":
//             return "Otuz";
//         case "4":
//             return "Qirq";
//         case "5":
//             return "Elli";
//         case "6":
//             return "Altmis";
//         case "7":
//             return "Yetmis";
//         case "8":
//             return "Seksan";
//         case "9":
//             return "Doxsan";
//     }
// }

// function hundryDigit(num) {
//     switch (num) {
//         case "1":
//             return "Yuz";
//         case "2":
//             return "Iki Yuz";
//         case "3":
//             return "Otuz";
//         case "4":
//             return "Qirq";
//         case "5":
//             return "Elli";
//         case "6":
//             return "Altmis";
//         case "7":
//             return "Yetmis";
//         case "8":
//             return "Seksan";
//         case "9":
//             return "Doxsan";
//     }
// // }

// function isLucky(num) {
//     let text = String(num)
//     if (+text[0] + +text[1] + +text[2] === +text[3] + +text[4] + +text[5]) {
//         return true
//     }
//     return false
// }
// console.log(isLucky(235801));
// ;

// function capitalizeWords(text) {
//     let words = text.split(" ");
//     let result = ""
//     for (let i = 0; i < words.length; i++) {
//         result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
//     }
//     return (result.trim());

// }

// console.log(capitalizeWords('Hello my name is Harry'));

// let sy = "1234567890-=+_) (*&^%$#@!`~{}][|\\/?><,.';:\""


// function letterCounter(text) {
//     let result = ""
//     for (let i = 0; i < text.length; i++) {
//         if (!sy.includes(text[i])) {
//             result += text[i]
//         }
//     }

//     // let result = text.match(/[a-zA-Z]+/g).join("")
//     console.log(result.length);

// }
// letterCounter("Salam3746)_ nece34734sen!")

// arrow func
// callback func
// iife
// construction func



// () => {
//     console.log("Salam");
// }


// function getSayHello() {
//     console.log("Salam");
// }


// let getSayHello = function () {
//     console.log("Salam");
// }

// let myfunc = name => name
// console.log(myfunc("Murad"));
// (function(name){
//     console.log("Murad");
// })("Murad")

// IIFE
// arrow func
// anonim func
// callback func


// bir funksiyaya parametr kimi oturulen func
// esas func-dan asili olan func



// function parentFunc(text, cb) {
//     cb(text)
// }

// // parentFunc("Murad", function (param) {
// //     console.log("Welcome ", param);
// // })

// parentFunc("Murad", param => console.log("Welcome ", param))


// find(function (pizza) {
//     return pizza.id === id
// })


// (()=>{

// })()




// prototype
//

// const date = new Date()
// console.log(date.getTimezoneOffset());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.getMilliseconds());
// console.log(date.getTime());

// function daysBetweenDates(a, b) {
//     const date1 = new Date(a);
//     const date2 = new Date(b)
//     const result = date2 - date1;

//     console.log(result / (1000 * 60 * 60 * 24));


// }
// daysBetweenDates("2025-04-01", "2025-04-10")


// const users = "Asif, Leman, Senan, Nicat, Cumshud";

// let result = ""
// for (let i = 0; i < users.length; i++) {
//     if (users[i] !== ",") {
//         result += users[i].trim()
//     } else {
//         console.log(result);
//         result = ""
//     }
// }
// console.log(result);
// const users = "Asif, Leman, Senan, Nicat, Cumshud";

// console.log(users.join(" "));

// // users[users.length] = "Murad"
// users.push("Murad", "Ehmed", "Cicek")
// let val =  users.unshift("Murad")
// let deletedUser = users.shift()
// let deletedUser = users.pop()

// console.log(deletedUser);

// users[10] = "Murad"
// console.log(users);



// users[2] = "Murad";
// console.log(users);
// let str = "hello"

// str[2] = "M"
// console.log(str);



// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }


// mutable
// immutable


// push
// pop
// shift()
// unshift
// splice()
// reverse();
// sort();
// let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.splice(2, 0, 4, 5, 6));
// console.log(arr);


// foreach
// map
// filter
// find
// reduce
// some
// every
// slice
// join


// let arr = [1, 2, 3, 4, 5, 6, 7]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// const myFunc = function (x, y, z) {
//     console.log(x, y, z);
// }
// arr.forEach(myFunc)


// arr.salamDe()
// let arr = [1, 2, 3, 4, 5, 6, 7]

// Array.prototype.customForEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i], i, this)
//     }
// }


// arr.customForEach(testFunc)

// function testFunc(x) {
//     console.log(x);
// }


// ["Emin", "Asif", "Umid"].customForEach(item => console.log(item)
// )
// Array.prototype.salamDe = function () {

//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i]);
//     }
//     console.log("Salam necesiniz", this);
// }

// arr.salamDe()
// String.prototype;
// Number.prototype;


// let newUsers = users;
// newUsers.pop()
// console.log(users);
// console.log(newUsers);

// let val = users.reverse()
// val.pop()

// let val = users.splice(10, 10)
// console.log(users);


// const arr = ["Asif", "Leman", "Senan", "Nicat", "Cumshud", "Cicek"];
// const arr = ['ə', 'ğ', 'ü', 'ö', 'ı']
// const arr = [4, -1, 100, 100, 101, 1000]
// const arr = [
//     {
//         name: "Murad",
//         age: 25
//     },
//     {
//         name: "Cumshud",
//         age: 21
//     },
//     {
//         name: "Asif",
//         age: 24
//     }
// ]
// if (a > b) {
//     return 8
// }
// else if (a < b) {
//     return -1
// }
// else {
//     return 0
// }

// arr.sort((a, b) => a - b)
// arr.sort((b, a) => b.localeCompare(a))
// arr.sort((a, b) => a.name.localeCompare(b.name))
// arr.sort((a, b) => a.age - b.age)
// console.log(arr);

// Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
// Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək
// üçün proqram tərtib edin.
//  - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
// salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran
//  getAnnualSalary() funksiyasını yazın.
// - Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
// Ayın nömrəsini parametr kimi qəbul edən və salary massivindən
//  həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.
// Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
// - Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
// Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və
//  salary massivi əsasında həmin rüb üçün şöbənin bütün
// işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.
// Rüb - 3 aylıq bir müddətdir.


// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 3005],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];


// function getAnnualSalary() {
//     let result = 0
//     for (let i = 0; i < salary.length; i++) {
//         for (let j = 0; j < salary[i].length; j++) {
//             result += salary[i][j]
//         }
//     }
//     return result
// }
// console.log(getAnnualSalary());


// function getMonthlySalary(num) {
//     let result = []
//     for (let i = 0; i < salary.length; i++) {
//         result.push(salary[i][num - 1]);
//     }
//     return result
// }
// console.log(getMonthlySalary(12));


// function getQuarterSalary(num) {
//     let start = (num - 1) * 3;
//     let end = num * 3
//     let result = 0
//     for (let i = 0; i < salary.length; i++) {
//         for (let j = start; j < end; j++) {
//             result += salary[i][j]
//         }
//     }
//     return result
// }

// console.log(getQuarterSalary(3));


// 1 - [1,2,3] => [0,1,2]
// 2 - [4,5,6] => [3,4,5]
// 3 - [7,8,9] => [6,7,8]
// 4 - [10,11,12] => [9,10,11]






// function nDigit(n) {
//     let start = 10 ** (n - 1);
//     let end = 10 ** n;
//     let cnt = 0
//     let min;
//     for (let i = n === 1 ? 0 : start; i < end; i++) {
//         let strI = String(i);
//         let sum = 0;
//         let multi = 1;
//         for (let j = 0; j < n; j++) {
//             sum += +strI[j]
//             multi *= strI[j]
//         }
//         if (sum === multi) {
//             console.log(i);

//             cnt++
//             if (cnt === 1) {
//                 min = i
//             }
//         }
//     }
// }
// nDigit(6)

// 1=> 0 - 10
// 2=>10 - 100
// 3=>100 - 1000
// 4=> 1000 - 10000




