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