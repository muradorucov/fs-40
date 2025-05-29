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
// if (Number(fullName[i]) || fullName[i] === "0") {
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

let value = "kelek";
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


for (let i = 0; i < value.length; i++) {

    if (value[i] !== value[value.length - 1 - i]) {
        result = "Palendrom deyil!"
        break;
    }
}

console.log(result);
