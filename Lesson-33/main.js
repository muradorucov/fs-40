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





// foreach
// map
// filter
// find
// findIndex
// some
// every
// slice
// join
// reduce

// let products = [
//     {
//         id: 1,
//         name: "Apple",
//         price: 1200,
//     },
//     {
//         id: 2,
//         name: "Samsung",
//         price: 800,
//     },
//     {
//         id: 3,
//         name: "redmi",
//         price: 1000,
//     },
//     {
//         id: 4,
//         name: "Oppo",
//         price: 1500,
//     },
//     {
//         id: 5,
//         name: "Huawei",
//         price: 2000,
//     }
// ]
// let totalPrice = 0
// products.forEach(item => {
//     totalPrice += item.price
// })
// console.log(totalPrice);
// Array.prototype.customReduce = function (cb, initValue) {
//     let result = initValue;
//     for (let i = 0; i < this.length; i++) {
//         result = cb(result, this[i], i, this)
//     }
//     return result
// }
// let totalPrice = products.customReduce((acc, item, index, arr) => {
//     acc.push(item.price)
//     return acc
// }, [])

// console.log(totalPrice);


// let arr = ["Senan", "Cumshud", "Nicat", "Asif", "Cicek"];
// let result = arr.forEach(function (z, y, x) {
//     console.log(z);
// });

// arr.forEach((index, item, array) => {
//     console.log(item);

// });



// Array.prototype.customMap = function (cb) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this))
//     }
//     return result
// }

// let arr = [];
// arr.customMap()
// Array.prototype.customFilter = function (cb) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         let val = cb(this[i], i, this)
//         if (val) {
//             result.push(this[i])
//         }
//     }
//     return result
// }


// let price = [10, 300, 400, 56, 1000] //net

// let result = price.every(item => item > 10 && item < 50 || item === 10)
// console.log(result);

// Array.prototype.customFind = function (cb) {
//     let result;
//     for (let i = 0; i < this.length; i++) {
//         let val = cb(this[i], i, this)
//         if (val) {
//             result = this[i]
//             break;
//         }
//     }
//     return result
// }
// let result = price.customFind((item, index) => item > 300)
// let result = price.findIndex((item, index) => item > 3000)
// // let newArr = price.customFilter((item) => item <= 300)

// console.log(result);



// let obj = {

// }


// obj.name = "murad"

// console.log(obj);


// let newArr = [];
// price.forEach(item => {
//     if (item <= 300) {
//         newArr.push(item)
//     }
// })

// console.log(newArr);



// price.forEach(item => grossPrice.push(item + (item * 0.18)))
// let grossPrice = price.customMap(item => item)

// console.log(grossPrice);
// console.log(price);



// let newArr = structuredClone(price)

// let grossPrice = [11.8, 348.2,]

// customerId : order
// order date sort
// filter productId
// let data = [
//     {
//         "id": 10271,
//         "customerId": "SPLIR",
//         "employeeId": 6,
//         "orderDate": "1996-08-01 00:00:00.000",
//         "requiredDate": "1996-08-29 00:00:00.000",
//         "shippedDate": "1996-08-30 00:00:00.000",
//         "shipVia": 2,
//         "freight": 4.54,
//         "shipName": "Split Rail Beer & Ale",
//         "shipAddress": {
//             "street": "P.O. Box 555",
//             "city": "Lander",
//             "region": "WY",
//             "postalCode": 82520,
//             "country": "USA"
//         },
//         "details": [
//             {
//                 "productId": 33,
//                 "unitPrice": 2,
//                 "quantity": 24,
//                 "discount": 0
//             }
//         ]
//     },
//     {
//         "id": 10266,
//         "customerId": "WARTH",
//         "employeeId": 3,
//         "orderDate": "1996-07-26 00:00:00.000",
//         "requiredDate": "1996-09-06 00:00:00.000",
//         "shippedDate": "1996-07-31 00:00:00.000",
//         "shipVia": 3,
//         "freight": 25.73,
//         "shipName": "Wartian Herkku",
//         "shipAddress": {
//             "street": "Torikatu 38",
//             "city": "Oulu",
//             "region": "NULL",
//             "postalCode": 90110,
//             "country": "Finland"
//         },
//         "details": [
//             {
//                 "productId": 33,
//                 "unitPrice": 30.4,
//                 "quantity": 12,
//                 "discount": 0.05
//             }
//         ]
//     },
//     {
//         "id": 10279,
//         "customerId": "TRADH",
//         "employeeId": 8,
//         "orderDate": "1996-08-13 00:00:00.000",
//         "requiredDate": "1996-09-10 00:00:00.000",
//         "shippedDate": "1996-08-16 00:00:00.000",
//         "shipVia": 2,
//         "freight": 25.83,
//         "shipName": "Lehmanns Marktstand",
//         "shipAddress": {
//             "street": "Magazinweg 7",
//             "city": "Frankfurt a.M.",
//             "region": "NULL",
//             "postalCode": 60528,
//             "country": "Germany"
//         },
//         "details": [
//             {
//                 "productId": 17,
//                 "unitPrice": 31.2,
//                 "quantity": 15,
//                 "discount": 0.25
//             }
//         ]
//     },
//     {
//         "id": 10292,
//         "customerId": "TRADH",
//         "employeeId": 1,
//         "orderDate": "1996-08-28 00:00:00.000",
//         "requiredDate": "1996-09-25 00:00:00.000",
//         "shippedDate": "1996-09-02 00:00:00.000",
//         "shipVia": 2,
//         "freight": 1.35,
//         "shipName": "Tradiçao Hipermercados",
//         "shipAddress": {
//             "street": "Av. Inês de Castro 414",
//             "city": "Sao Paulo",
//             "region": "SP",
//             "postalCode": "05634-030",
//             "country": "Brazil"
//         },
//         "details": [
//             {
//                 "productId": 20,
//                 "unitPrice": 64.8,
//                 "quantity": 20,
//                 "discount": 0
//             }
//         ]
//     },
//     {
//         "id": 10295,
//         "customerId": "LONEP",
//         "employeeId": 2,
//         "orderDate": "1996-09-02 00:00:00.000",
//         "requiredDate": "1996-09-30 00:00:00.000",
//         "shippedDate": "1996-09-10 00:00:00.000",
//         "shipVia": 2,
//         "freight": 1.15,
//         "shipName": "Vins et alcools Chevalier",
//         "shipAddress": {
//             "street": "59 rue de l'Abbaye",
//             "city": "Reims",
//             "region": "NULL",
//             "postalCode": 51100,
//             "country": "France"
//         },
//         "details": [
//             {
//                 "productId": 33,
//                 "unitPrice": 30.4,
//                 "quantity": 4,
//                 "discount": 0
//             }
//         ]
//     },
//     {
//         "id": 10313,
//         "customerId": "WARTH",
//         "employeeId": 2,
//         "orderDate": "1996-09-24 00:00:00.000",
//         "requiredDate": "1996-10-22 00:00:00.000",
//         "shippedDate": "1996-10-04 00:00:00.000",
//         "shipVia": 2,
//         "freight": 1.96,
//         "shipName": "QUICK-Stop",
//         "shipAddress": {
//             "street": "Taucherstraße 10",
//             "city": "Cunewalde",
//             "region": "NULL",
//             "postalCode": 1307,
//             "country": "Germany"
//         },
//         "details": [
//             {
//                 "productId": 36,
//                 "unitPrice": 15.2,
//                 "quantity": 12,
//                 "discount": 0
//             }
//         ]
//     },
//     {
//         "id": 10317,
//         "customerId": "LONEP",
//         "employeeId": 6,
//         "orderDate": "1996-09-30 00:00:00.000",
//         "requiredDate": "1996-10-28 00:00:00.000",
//         "shippedDate": "1996-10-10 00:00:00.000",
//         "shipVia": 1,
//         "freight": 12.69,
//         "shipName": "Lonesome Pine Restaurant",
//         "shipAddress": {
//             "street": "89 Chiaroscuro Rd.",
//             "city": "Portland",
//             "region": "OR",
//             "postalCode": 97219,
//             "country": "USA"
//         },
//         "details": [
//             {
//                 "productId": 1,
//                 "unitPrice": 14.4,
//                 "quantity": 20,
//                 "discount": 0
//             }
//         ]
//     }
// ]

// let obj = {}
// data.forEach(item => {
//     if (obj[item.customerId]) {
//         obj[item.customerId] += 1
//     } else {
//         obj[item.customerId] = 1
//     }
// })

// console.log(obj);

// {
//     2:3,
//     4:1
// }


// let ids = data.map(item => item.id);
// console.log(ids);


// function dateSort() {
//     data.sort((a, b) => {
//         let aDate = new Date(a.orderDate);
//         let bDate = new Date(b.orderDate);

//         // console.log(aDate);
//         // console.log(bDate);
//         // console.log(aDate - bDate);

//         // console.log("-------------------------------------");
//         return bDate - aDate

//     })

//     console.log(data);

// }

// dateSort()

// let ids2 = data.map(item => item.id);
// console.log(ids2);


// function filterWithProductId(id) {
//     return data.filter(item => item.details[0].productId === id)
// }

// console.log(filterWithProductId(33));


// let obj = {
//     "SPLIR": 2,
//     "SJYR": 3,
// }

// let item = "test";

// let userWithObj = {
//     "full-name": "John Doe",
//     age: 20,
//     isActive: true,
// cars: [
//     {
//         model: "BMW",
//         year: 2020,
//     },
//     {
//         model: "Mercedes",
//         year: 2021,
//     },
//     {
//         model: "Audi",
//         year: 2022,
//     }
// ],
// contact: {
//     email: "example@gmail.com",
//     phone: "038643847384",
//     socials: {
//         in: "",
//         insta: "",
//         fb: "test.com"
//     }
// }
// email: "testexample@gmail.com",
// mails: ["", "", ""]
// }
// userWithObj.test = "newemail@gmail.com";
// userWithObj.email = "";
// delete userWithObj.test

// console.log(userWithObj);
// console.log(userWithObj.contact.socials.fb);


// userWithObj.cars.forEach(car => {
//     console.log(car.model);
// })


// userWithObj["full-name"]

// let userWithArr = [
//     "John",
//     "example@gmail.com",
//     20,
//     true
// ]

// userWithArr[0];
// userWithArr[1];
// console.log(userWithObj["name"]);
// console.log(userWithObj["email"]);
// console.log(userWithObj.isActive);

// let car = {
//     model: "BMW",
//     year: 2020,
//     price: 50000,
//     isActive: true,
//     features: ["ABS", "Airbags", "Cruise Control"],
//     discountPrice(newPrice) {
//         return car.price = newPrice
//     }
// };
// car.discountPrice(10050);
// console.log(car);



// car.year = 2025

// let user = {
//     name: "Murad",
//     gender: "male",
//     bd: "08062000",
//     setAge(newage) {
//         this.age = newage
//     },
//     getYearsBeforeRetirement() {
//         return 65 - this.age
//     }
// }
// console.log(user.bd);
// user.age = 25;
// delete user.bd
// user.setAge(26);
// console.log(user);

// console.log(user.getYearsBeforeRetirement());


// deep clone && shallow clone



// let arr = ["Senan", "Nicat", "Leman", [0, 3, 4]];
// let newArr = [];
// arr.forEach(item => newArr.push(item))
// let newArr = arr.map(x => x)
// let newArr = [...arr]
// newArr[3].push("Salam")
// newArr.pop()
// console.log("old Arr", arr);
// console.log("new Arr", newArr);


// console.log(...arr);



// let arr = ["Senan", "Nicat", "Leman", [0, 3, 4]];
// let newArr = JSON.parse(JSON.stringify(arr))
// let newArr = structuredClone(arr);

// newArr[3].push("salam")
// arr.shift();

// console.log("old Arr", arr);
// console.log("new Arr", newArr);

// let arr = [0, 2, 3, 4, 4];
// let str = JSON.stringify(arr);
// let newArr = JSON.parse(str)
// console.log(arr);

// console.log(str);
// console.log(newArr);



let user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    phone: "123-456-7890",
    car: {
        "model": "AUDI",
        "marka": "A4"
    }
}
// let newUser = {}

// let keys = Object.keys(user)


// for (let i = 0; i < keys.length; i++) {
//     newUser[keys[i]] = user[keys[i]]
// }

// for (const key in user) {
//     newUser[key] = user[key]
// }
// errors
// for (const item of user) {
//     console.log(item);

// }

// Object.entries(user).forEach(([key, value]) => {
//     newUser[key] = value
// })

// console.log(Object.entries(user));





// newUser.test = "Salam"
// newUser.car.marka = "RS 6"
// console.log(user);

// console.log(newUser);





// call 
// apply
// bind




// rest 
// spread
// destructuring


// const obj = {
//     name: "John Doe",
//     age: 30,
//     email: "johndoe@example.com",
//     phone: "123-456-7890",
//     arr: [0, 3, 4, 5, 5],
//     getName: function () {
//         return [...this.arr]
//     }
// }

// let nameA = obj.getName();
// obj.arr.push("Test");

// console.log(nameA);

// obj = {}

// obj.name = "Murad";
// console.log(obj);


// let { name, email, age, phone } = obj


// email

// let arr = ["John", "example@gmail.com", 20, true];
// let name = arr[0];
// let email = arr[1]

// let [name, email, age, isActive] = arr;
// let [name, email, ...other] = arr;

// console.log(other);




const client = {
    fullName: "Asif Rehimov",
    creditLimit: 3000,
    balans: -1000,
    precentOfMinPayment: 5,
    getBalance() {
        if (this.balans >= 0) {
            return `Balansınız ${this.balans} AZN`
        } else {
            return (`Borcunuz ${-1 * this.balans} AZN`);
        }
    },
    getMinPaymant() {
        if (this.balans >= 0) {
            return "Sizin borcunuz yoxdur"
        } else {
            let minPay = -1 * ((this.balans * this.precentOfMinPayment) / 100);
            return `Minimum ödənişiniz ${minPay} AZN`
        }
    },
    withdraw(param) {
        if (this.balans >= 0) {
            if (this.balans + this.creditLimit >= param) {
                if (this.balans >= param) {
                    this.balans -= param
                    return this.getBalance()
                } else {
                    this.creditLimit = (this.balans + this.creditLimit) - param
                    this.balans = this.balans - param;
                    return `${this.getBalance()} \n${this.getMinPaymant()}`
                }
            } else {
                return "Mövcud vəsait kifayət deyil"
            }
        } else {
            if (this.creditLimit >= param) {
                this.creditLimit -= param;
                this.balans -= param
                return `${this.getBalance()} \n${this.getMinPaymant()}`
            } else {
                return "Mövcud vəsait kifayət deyil"
            }
        }
    },
    refill(param) {
        if (this.balans >= 0) {
            this.balans += param
            return this.getBalance()
        }
        else {
            if (Math.abs(this.balans) >= param) {
                this.balans += param;
                this.creditLimit += param
                return `${this.getBalance()} \n${this.getMinPaymant()}`
            }
            else {
                this.creditLimit += (-1 * this.balans)
                this.balans += param;
                return this.getBalance()
            }
        }
    }
}


// console.log(client.getBalance());
// console.log(client.getMinPaymant());
// console.log(client.refill(900));



// -1000
// 1200
// 200


// const calc = {
//     memory: 0,
//     vurma(a, b) {
//         return a * b
//     },
//     çıxma(a, b) {
//         return a - b
//     },
//     bölmə(a, b) {
//         return a / b
//     },
//     toplama(a, b) {
//         return a + b
//     },
//     read() {
//         return this.memory
//     },
//     clear() {
//         this.memory = 0
//     },
//     save(value) {
//         this.memory = value
//     }
// }




// calc.save(calc.bölmə(10, 40))
// console.log(calc.read());
// calc.clear()


// function mostFrequent(str) {
//     let arr = str.split(", ");
//     const obj = {}
//     arr.forEach(item => {
//         if (obj[item]) {
//             obj[item]++
//         } else {
//             obj[item] = 1
//         }
//     });

//     let max = 0;
//     let result;
//     for (const key in obj) {

//         if (obj[key] > max) {
//             max = obj[key]
//             result = key
//         }
//     }

//     console.log(Object.values(obj));
//     // console.log(Object.);


//     return result
// }

// console.log(mostFrequent("1, 3, 2, 3, 4, 3, 4, 5, 4, 1, 3"));



// function mostFrequent(str) {
//     return str.split(", ").reduce((acc, val) => {
//         acc.map[val] = (acc.map[val] || 0) + 1;
//         if (acc.map[val] > acc.maxCount) {
//             acc.maxCount = acc.map[val];
//             acc.result = val;
//         }
//         return acc;
//     }, {
//         map: {},
//         maxCount: 0,
//         result: null
//     });
// }




// console.log(mostFrequent("1, 3, 2, 3, 4, 3, 4, 5, 4, 1, 3"));
