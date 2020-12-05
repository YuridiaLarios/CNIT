let toNearestInteger;
let toSquareRootAndInteger;
let toNearestTenths;
let toNearestHundredths;
let toNearestThousandths;

Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
},false;

function removeCurrentErrorState() {
  let errorContainersArray = document.querySelectorAll(".errorContainer");
  // console.log(errorContainersArray);
  errorContainersArray.forEach(errorContainer => {errorContainer.style.display = "none"});
  let errorRedStage = document.getElementsByClassName("errorRedStage");
  while (errorRedStage.length)
    errorRedStage[0].className = errorRedStage[0].className.replace(/\berrorRedStage\b/g, "");
}


function createErrorDiv(message, currentContainer) {
  let errorDiv = document.createElement("div");
  let errorDivID = currentContainer.getAttribute("id") + "ErrorMessage";
  errorDiv.setAttribute("id", errorDivID);
  errorDiv.classList.add("errorContainer");
  errorDiv.textContent = message;
  errorDiv.appendAfter(currentContainer);
}

function printResults(inputFieldValue) {
  let part1Result = document.getElementById("part1Results");
  let result = '';
  result += `<ul><li><span class="liText">Original Floating point:</span> ${inputFieldValue}</li>`;
  result += `<li><span class="liText">Rounded to nearest integer:</span> ${toNearestInteger}</li>`;
  result += `<li><span class="liText">Square root rounded to nearest integer:</span> ${toSquareRootAndInteger}</li>`;
  result += `<li><span class="liText">Rounded to nearest tenths:</span> ${toNearestTenths}</li>`;
  result += `<li><span class="liText">Rounded to nearest hundredths:</span> ${toNearestHundredths}</li>`;
  result += `<li><span class="liText">Rounded to nearest Thousandths</span> ${toNearestThousandths}</li></ul>`;
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
  toNearestTenths = inputFieldValue.toFixed(1);
  toNearestHundredths = inputFieldValue.toFixed(2);
  toNearestThousandths = inputFieldValue.toFixed(3);

  printResults(inputFieldValue);
}

function makeCalculations() {
  let validInput = false;
  let inputField = document.getElementById("userInputPart1");
  let inputFieldValue = parseFloat(document.getElementById("userInputPart1").value);
  if (inputFieldValue !== "" && typeof(parseFloat(inputFieldValue) === "number")) {
    calculate(inputFieldValue);
  } else {
    createErrorDiv("Error please enter a valid input", inputField);
  }
}
