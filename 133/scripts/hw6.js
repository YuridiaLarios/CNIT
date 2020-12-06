let submited = false;
let toNearestInteger;
let toSquareRootAndInteger;
let toNearestTenths;
let toNearestHundredths;
let toNearestThousandths;

let part1Result = document.getElementById("part1Results");


Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
}, false;

function removeCurrentErrorState() {
  let errorContainersArray = document.querySelectorAll(".errorContainer");
  // console.log(errorContainersArray);
  errorContainersArray.forEach(errorContainer => {
    errorContainer.style.display = "none"
  });
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

// For Part 1;
function printResults(inputFieldValue) {
  let result = '';
  result += `<ul><li><span class="liText">Original Floating point:</span> ${inputFieldValue}</li>`;
  result += `<li><span class="liText">Rounded to nearest integer:</span> ${toNearestInteger}</li>`;
  result += `<li><span class="liText">Square root rounded to nearest integer:</span> ${toSquareRootAndInteger}</li>`;
  result += `<li><span class="liText">Rounded to nearest tenths:</span> ${toNearestTenths}</li>`;
  result += `<li><span class="liText">Rounded to nearest hundredths:</span> ${toNearestHundredths}</li>`;
  result += `<li><span class="liText">Rounded to nearest Thousandths</span> ${toNearestThousandths}</li></ul>`;
  part1Result.innerHTML = result;
}


// For Part 1;
function calculate(parsedInputFieldValue) {
  /*
  a) round the floating-point number to the nearest integer
  b) calculate the square root of the floating-point number and round it to an integer
  c) round the floating-point number to the nearest tenths position
  d) round the floating-point number to the nearest hunderdths position
  e) round the floating-point number to the nearest thousandths position
  */
  toNearestInteger = Math.round(parsedInputFieldValue);
  toSquareRootAndInteger = Math.round((Math.sqrt(parsedInputFieldValue)));
  toNearestTenths = parsedInputFieldValue.toFixed(1);
  toNearestHundredths = parsedInputFieldValue.toFixed(2);
  toNearestThousandths = parsedInputFieldValue.toFixed(3);

  printResults(parsedInputFieldValue);
}


// For Part 1;
function makeCalculations() {
  if (submited) {
    part1Result.innerHTML = "";
    removeCurrentErrorState();
  }
  let validInput = false;
  let inputField = document.getElementById("userInputPart1");
  let inputFieldValue = (document.getElementById("userInputPart1").value);
  let parsedInputFieldValue;
  if (inputFieldValue !== "" && !isNaN(inputFieldValue) && typeof (parseFloat(inputFieldValue) === "number")) {
    parsedInputFieldValue = parseFloat(inputFieldValue);
    submited = true;
    let regex = /^(\d{0,99}?)(.\d{4,99})$/;
    if (!regex.test(inputFieldValue)) {
      createErrorDiv("Error: AT LEAST 4 decimal positions", inputField);
    } else {
      calculate(parsedInputFieldValue);
    }
  } else {
    submited = true;
    createErrorDiv("Error: please enter a valid input", inputField);
  }
}

// for Part 2:
function resetPart2() {
  document.getElementById("userTextInputPart2").value = "";
  document.getElementById("userCharacterInputPart2").value = "";
  document.getElementById("part2Results").innerHTML = "";
  removeCurrentErrorState();
}

let part2Submited = false;
// for Part 2:
function findOccurrences() {
  part2Submited = true;
  if (part2Submited) {
    removeCurrentErrorState();
  }
  let userTextInputFieldPart2 = document.getElementById("userTextInputPart2");
  let userCharacterInputFieldPart2 = document.getElementById("userCharacterInputPart2");
  let textLines = userTextInputFieldPart2.value.trim().toLowerCase();
  let character = userCharacterInputFieldPart2.value.trim().toLowerCase();
  let part2Result = document.getElementById("part2Results");

  if (textLines !== "" && character !== "") {
    let counter = 0;
    for(let i = 0; i <= textLines.length - 1; i++) {
      if (textLines.charAt(i) === character) {
        counter++;
      }
    }
    if (counter === 0) {
      resetPart2();
      let myWindow = window.open("", "_blank", "width=300,height=100");
      myWindow.document.write(`<p>Search character ${character} not found in text string ${textLines}</p>`);
      } else if (counter === 1) {
      part2Result.innerHTML = `<p>There is <span class="boldText">${counter}</span> occurrence of character <span class="boldText">${character}</span> in <span class="boldText">${textLines}</span>.</p>`
    } else {
      part2Result.innerHTML = `<p>There are <span class="boldText">${counter}</span> occurrences of character <span class="boldText">${character}</span> in <span class="boldText">${textLines}</span>.</p>`
    }
  } else {
    createErrorDiv("Error: Please fill all empty fields.", userCharacterInputFieldPart2);
  }
}
