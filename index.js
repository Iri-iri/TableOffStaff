const name = document.querySelector("#name");
const year = document.querySelector("#year");
const date = document.querySelector("#date");
const sum = document.querySelector("#sum");
const add = document.querySelector("#add");
const removeBtn = document.querySelector("#removeBtn");
const sumBtn = document.querySelector("#sumBtn");
const tbody = document.querySelector("#tbody");
const number = document.querySelector("#number");
const sumAll = document.querySelector("#sumAll");
const up = document.querySelector("#up");
const down = document.querySelector("#down");

let arr = [];

function ArrPush() {
  let obj = {
    nameValue: name.value,
    yearValue: year.value,
    dateValue: date.value,
    sumValue: sum.value,
    checked: false,
  };
  arr.push(obj);
}

add.addEventListener("click", (event) => {
  event.preventDefault();
  ArrPush();
  displayTable();
  numberOfWorkers();
});

function displayTable() {
  tbody.innerHTML = ``;

  arr.forEach(function (item) {
    tbody.innerHTML += `
        <tr><td><input class="checkbox"  type="checkbox"></td>
        <td class = "newTitle">${item.nameValue}</td>
        <td class = "newYear">${item.yearValue}</td>
        <td class = "newDate">${item.dateValue}</td>
        <td class = "newSumValue">${item.sumValue}</td></tr>
        `;
  });
}

function numberOfWorkers() {
  number.innerHTML = arr.length;
}

removeBtn.addEventListener("click", () => {
  const selectedCheckBoxes = [...document.querySelectorAll(".checkbox")];

  selectedCheckBoxes.forEach(function (item, index) {
    if (item.checked) {
      arr[index].checked = true;
    }
  });

  arr = arr.filter(function (item) {
    return item.checked === false;
  });
  displayTable();
  numberOfWorkers()
});


sumBtn.addEventListener("click", () => {
  let arrOfSum = [];
  const selectedSumAll = [...document.querySelectorAll(".newSumValue")];

  selectedSumAll.forEach(function (item) {
    itemSum = +item.textContent;
    arrOfSum.push(itemSum);
  });
  console.log(arrOfSum);

  sumAll.innerHTML = arrOfSum.reduce((total, amount) => total + amount);
})


upYear.addEventListener("click", () => { 
  arr.sort(function (a, b) {
        return a.yearValue - b.yearValue
  });

  displayTable();
})

downYear.addEventListener("click", () => {
  arr.sort(function (a, b) {
    return b.yearValue - a.yearValue
  });

  displayTable();
});


upDate.addEventListener("click", () => { 
  arr.sort(function (a, b) {
    const dateA=new Date(a.dateValue), dateB=new Date(b.dateValue)
        return dateA- dateB
  });

  displayTable();
})

downDate.addEventListener("click", () => {
  arr.sort(function (a, b) {
    const dateA = new Date(a.dateValue), dateB = new Date(b.dateValue)
    return dateB - dateA
  });

  displayTable();
});




