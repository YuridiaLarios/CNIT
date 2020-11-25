let toNearestInteger;
let toSquareRootAndInteger;
let toNearestTenths;
let toNearestHundredths;
let toNearestThousandths;

function printResults(inputFieldValue) {
  let part1Result = document.getElementById("part1Results");
  let result = '';
  result += `<ul><li>Original Floating point: ${inputFieldValue}</li>`;
  result += `<li>Rounded to nearest integer: ${toNearestInteger}</li>`;
  result += `<li>Square root rounded to nearest integer: ${toSquareRootAndInteger}</li>`;
  result += `<li>Rounded to nearest tenths: ${toNearestTenths}</li>`;
  result += `<li>Rounded to nearest hundredths ${toNearestHundredths}</li>`;
  result += `<li>Rounded to nearest Thousandths ${toNearestThousandths}</li></ul>`;
  part1Result.innerHTML = result;
}

function calculate(inputFieldValue) {
  /* 
  a) round the floating-point number to the nearest integer
  b) calculate the square root of the floating-point number and round it to an integer
  c) round the floating-point number to the nearest tenths position
  d) round the floating-point number to the nearest hunderdths position
  e) round the floating-point number to the nearest thousandths position
  */
  toNearestInteger = Math.round(inputFieldValue);
  toSquareRootAndInteger = Math.round((Math.sqrt(inputFieldValue)));
  toNearestTenths = Math.round(inputFieldValue * 10) / 10;
  toNearestHundredths = Math.round(inputFieldValue * 100) / 100;
  toNearestThousandths = Math.round(inputFieldValue * 1000) / 1000;

  printResults(inputFieldValue);
}

function makeCalculations() {
  let validInput = false;
  let inputField = document.getElementById("userInputPart1");
  let inputFieldValue = document.getElementById("userInputPart1").value;
  if (inputFieldValue !== "" && typeof (parseFloat(inputFieldValue) === "number")) {
    validInput = true;
  }
  if (validInput) {
    calculate(inputFieldValue);
  }
}