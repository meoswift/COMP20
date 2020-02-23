function onSubmit(event) {
  event.preventDefault();
  const num1 = parseInt(encodeURIComponent(firstNumber.value));
  const num2 = parseInt(encodeURIComponent(secondNumber.value));

  outputBox.innerHTML = "Number 1: " + num1.toString() + '<br>' +
                        "Number 2: " + num2.toString();

  if (checkAmicable(num1, num2) == true) {
    outputBox.innerHTML += "<br><h2> These two numbers are amicable!</h2>";
  } else {
    outputBox.innerHTML += "<br><h2> These two numbers are NOT amicable!</h2>";
  }

  checkNew.classList.remove('hidden');
  /* Test code for isFactor
  console.log(isFactor(10, 2));
  console.log(isFactor(15, 3));
  console.log(isFactor(10, 7));
  */

  /* Test code for showFactors
  testNumbers = [1,2,3,4,5,6,7];
  showFactors(testNumbers);
  testNumbers2 = [4,7,8,0,19];
  showFactors(testNumbers2);
  testNumbers3 = [3,9,10,1,20];
  showFactors(testNumbers3);
  */

  /* Test code for addFactors
  testNumbers = [1,2,3,4,5,6,7];
  console.log("Should print 29");
  console.log("Sum = " + addFactors(testNumbers));
  testNumbers2 = [4,7,8,0,19];
  console.log("Should print 38");
  console.log("Sum = " + addFactors(testNumbers2));
  testNumbers3 = [3,9,10,1,20];
  console.log("Should print 43");
  console.log("Sum = " + addFactors(testNumbers3));
  */

  /* Test code for getFactors
  testNumber1 = 220;
  console.log(getFactors(testNumber1));
  testNumber2 = 284;
  console.log(getFactors(testNumber2));
  testNumber3 = 375;
  console.log(getFactors(testNumber3));
  testNumber4 = 114;
  console.log(getFactors(testNumber4));
  */
}

function isFactor(number, test_num) {
  if (number % test_num === 0)
    return true;

  return false;
}

function showFactors(numbersList) {
  //outputBox.innerHTML += "<br>" + "[";
  outputBox.innerHTML += numbersList;
//  outputBox.innerHTML += "]";
}

function addFactors(numbersList) {
  let sum = 0;
  for (i = 0; i < numbersList.length; i++)
    sum += numbersList[i];

  //outputBox.innerHTML += "<br>Sum = " + sum;
  return sum;
}

function getFactors(number) {
  const numList = [];
  //outputBox.innerHTML += "<br>" + "[";
  for (i = 1; i < number; i++)
    if (isFactor(number, i))
      numList.push(i);

  //outputBox.innerHTML += numList;
  //outputBox.innerHTML += "]";
  return numList;
}

function checkAmicable (num1, num2) {
  const num1Factors = getFactors(num1);
  const num2Factors = getFactors(num2);
  const num1SumFactors = addFactors(num1Factors);
  const num2SumFactors = addFactors(num2Factors);
  console.log(num1);
  console.log(num2);
  console.log(num1SumFactors);
  console.log(num2SumFactors);
  if (num1SumFactors === num2 && num2SumFactors === num1)
    return true;

  return false;
}


const firstNumber = document.querySelector('#first-num');
const secondNumber = document.querySelector('#second-num');
const outputBox = document.querySelector('#output-box');
const checkNew = document.querySelector('#new-pair');
const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);
