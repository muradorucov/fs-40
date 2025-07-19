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
// arrow func
// rekrusive func
// callback func
// iife
// construction func

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


function calc(a, b, c) {
    switch (c) {
        case "+":
            return a + b
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "*":
            return a * b
        default:
            return "Yanlish deger!"
    }
}

console.log(calc(10, 11, "+"));
console.log(calc(10, 11, "-"));
console.log(calc(10, 11, "/"));
console.log(calc(10, 11, "*"));
