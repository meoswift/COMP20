function storeUnsortedNumbers() {
  for (i = 0; i < 5; i++) {
    const n = getRandomInt(1, 48);
    numbersList.push(n.toString());
  }
  luckyNumber = getRandomInt(1, 18);
  console.log(luckyNumber);
  numbersList.push(luckyNumber);
}

function getRandomInt(max, min) {
  n = Math.random() * (max - min) + min;
  return Math.round(n);
}

function displayUnsortedNumbers(numbersList) {
  for (i = 0; i < numbersList.length; i++) {
    const s = document.createElement("span");
    s.innerHTML = "Random number " + (i + 1) + " is: " + numbersList[i] + "<br>";
    randomBox.appendChild(s);
  }
}

function displaySortedNumbers(numbersList) {
  numbersList.sort((a, b) => a - b);
  for (i = 0; i < numbersList.length; i++) {
    const s = document.createElement("span");
    s.innerHTML = "Random number " + (i + 1) + " is: " + numbersList[i] + "<br>";
    sortedBox.appendChild(s);
  }
}

function storeInputIntoArrays() {
  const query = encodeURIComponent(numberInput.value);
  const lucky = encodeURIComponent(luckyInput.value);
  inputLucky  = parseInt(lucky);
  inputList   = query.split('%20');
  if (inputList.length > 5 || inputList.length < 5) {
    alert('Please input 5 numbers!');
    location.reload(true);
  }
}

function onSubmit(event) {
  event.preventDefault();
  storeInputIntoArrays();
  displayPayout(numbersList, inputList, luckyNumber, inputLucky);
}

function matchedNumbers(numbersList, inputList) {
  let counter = 0;
  console.log(numbersList);
  console.log(inputList);
  for (i = 0; i < numbersList.length; i++) {
    if (inputList.includes(numbersList[i]) === true)
        counter++;
  }

  return counter;
}

function displayPayout(numbersList, inputList, luckyNumber, inputLucky) {
  let matches = matchedNumbers(numbersList, inputList);
  if (matches === 5 && luckyNumber === inputLucky)
    alert("You won $7000 a WEEK for LIFE!");
  if (matches === 5 && luckyNumber !== inputLucky)
    alert("You won $25000 a YEAR for LIFE!");
  if (matches === 4 && luckyNumber === inputLucky)
    alert("You won $5000!");
  if (matches === 4 && luckyNumber !== inputLucky)
    alert("You won $200!");
  if (matches === 3 && luckyNumber === inputLucky)
    alert("You won $150!");
  if (matches === 3 && luckyNumber !== inputLucky)
    alert("You won $20!");
  if (matches === 2 && luckyNumber === inputLucky)
    alert("You won $25!");
  if (matches === 2 && luckyNumber !== inputLucky)
    alert("You won $3!");
  if (matches === 1 && luckyNumber === inputLucky)
    alert("You won $6!");
  if (matches === 1 && luckyNumber !== inputLucky)
    alert("You won $4!");
}

const numbersList = new Array();
let   inputList   = new Array();
const randomBox   = document.querySelector('#random-box');
const sortedBox   = document.querySelector('#sorted-box');
const numberInput = document.querySelector('#number-input');
const luckyInput  = document.querySelector('#lucky-input');
const form = document.querySelector('form');
let   luckyNumber = 0;
let   inputLucky  = 0;
storeUnsortedNumbers();
displayUnsortedNumbers(numbersList);
displaySortedNumbers(numbersList);
form.addEventListener('submit', onSubmit);
