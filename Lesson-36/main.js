// promise
// async /await
// fetch
// axios
// setTimeout
// setInterval
// DOM || BOM event

// const res = fetch("https://dummyjson.com/products?skip=17&limit=10")
// res.then((param) => {
//   param.json().then(data => console.log(data)
//   )
// })

// const arr = [
//   [10, 20, 35, 15, 5],
//   [4, 5, 20, 10, 40],
//   [5, 6, 10]
// ]
// let result = arr.reduce((x, y) => {
//   return x.filter(e => y.includes(e))
// })
// console.log(result);

// let allItems = arr.flat();
// let obj = {}
// let cnt = arr.length;

// allItems.forEach(item => {
//   if (obj[item]) {
//     obj[item]++
//   } else {
//     obj[item] = 1
//   }
// })

// let result = []
// for (const key in obj) {
//   if (obj[key] === cnt) {
//     result.push(key)
//   }
// }
// console.log(result);




// arr.forEach(item => allArr.push(...item))


// output [5, 10]


// const result = arr.reduce((a, b) => {
//   console.log(a, b);
//   return a.filter(x => b.includes(x))
// });
// console.log(result); // [5, 10]



// function mainFunc(arr, cb) {
//   let result = []
//   arr.forEach((item, index) => {
//     if (cb(item)) {
//       result.push(item)
//     }
//   })
//   console.log(result);
// }
// mainFunc(["apple", "banana", "cherry"], callBack)
// function callBack(item) {
//   if (item.startsWith("a")) {
//     return true
//   }
// }
