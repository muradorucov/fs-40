import { data } from './data.js';

const tableElem = document.querySelector(".table")
const tbodyElem = document.querySelector('tbody');
const inputElem = document.querySelector("input");
const notfoundimage = document.querySelector("#notfoundimage");
// const nameColumn = document.querySelector("#name");
const columns = document.querySelectorAll("th")

render()

inputElem.addEventListener("input", () => {
  const val = inputElem.value.trim().toLowerCase();

  const filteredData = data.filter(item => {
    return item.name.toLowerCase().includes(val) ||
      item.ticker.toLowerCase().includes(val)
  })
  render(filteredData);

  if (filteredData.length === 0) {
    notfoundimage.classList.remove("!hidden");
    tableElem.classList.add("!hidden");
  } else {
    notfoundimage.classList.add("!hidden");
    tableElem.classList.remove("!hidden");
  }

})
let isSorted = false;
columns.forEach(column => {
  column.addEventListener("click", () => {
    let key = column.id
    if (isSorted) {
      if (key === "value") {
        data.sort((a, b) => b[key] - a[key])
      } else if (key === "change") {
        data.sort((a, b) => parseFloat(b[key]) - parseFloat(a[key]))
      } else {
        data.sort((a, b) => b[key].localeCompare(a[key]))
      }
      isSorted = false
    } else {
      if (key === "value") {
        data.sort((a, b) => a[key] - b[key])
      } else if (key === "change") {
        data.sort((a, b) => parseFloat(a[key]) - parseFloat(b[key]))
      } else {
        data.sort((a, b) => a[key].localeCompare(b[key]))
      }
      isSorted = true
    }
    render()
  })
})
// let isSorted;
// nameColumn.addEventListener("click", () => {
//   if (isSorted) {
//     data.sort((a, b) => {
//       return a.name.localeCompare(b.name)
//     })
//     isSorted = false
//   } else {
//     data.sort((a, b) => {
//       return b.name.localeCompare(a.name)
//     })
//     isSorted = true
//   }

//   render()
// })


function render(list = data) {
  tbodyElem.innerHTML = ""
  list.forEach(item => {
    tbodyElem.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.ticker}</td>
        <td>${item.value}</td>
        <td class="${item.change[0] === "-" ? "text-[red]" : "text-[greenyellow]"}">${item.change}</td>
      </tr >
    `
  })
}