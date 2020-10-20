//Part 1a: the product and sum of every fourth integer from 5 to 21 inclusive using for loop
let containerPart1a = document.getElementById("hwPart1a");
let productOfEveryFourthInteger = 1;
let sumOfEveryFourthInteger = 0;

for (let i = 5; i <= 21; i += 4) {
  productOfEveryFourthInteger *= i;
  sumOfEveryFourthInteger += i;
}

if (containerPart1a != null) {
  let productTextParagraph = document.createElement("p");
  productTextParagraph.classList.add("productResult");
  productTextParagraph.textContent = `The product of every fourth integer from 5 to 21 inclusive is ${productOfEveryFourthInteger}.`;

  let sumTextParagraph = document.createElement("p");
  sumTextParagraph.classList.add("sumResult");
  sumTextParagraph.textContent = `The sum of every fourth integer from 5 to 21 inclusive is ${sumOfEveryFourthInteger}.`;

  containerPart1a.append(productTextParagraph);
  containerPart1a.append(sumTextParagraph);
}

//Part 1b: the product and sum of every third integer from 3 to 21 inclusive using for while
let containerPart1b = document.getElementById("hwPart1b");
let productOfEveryThirdInteger = 1;
let sumOfEveryThirdInteger = 0;
let countNumber = 3;
while (countNumber <= 21) {
  productOfEveryThirdInteger *= countNumber;
  sumOfEveryThirdInteger += countNumber;
  countNumber += 3;
}
if (containerPart1b != null) {
  let productTextParagraph2 = document.createElement("p");
  productTextParagraph2.classList.add("productResult2");
  productTextParagraph2.textContent = `The product of every third integer from 3 to 21 inclusive is ${productOfEveryThirdInteger}.`;

  let sumTextParagraph2 = document.createElement("p");
  sumTextParagraph2.classList.add("sumResult2");
  sumTextParagraph2.textContent = `The sum of every third integer from 3 to 21 inclusive is ${sumOfEveryThirdInteger}.`;

  containerPart1b.append(productTextParagraph2);
  containerPart1b.append(sumTextParagraph2);
}

//Part 4: Hollow square:
let squareResults = document.getElementById("squareResults");
document.getElementById("extraCreditSubmitButton").onclick = function() { myFunction() };

function myFunction() {
  let squareSize = document.getElementById("squareSize").value;
  let draw = '';
  if (squareSize < 2 || squareSize > 10 ) {
    squareResults.innerHTML = "Error, please enter numbers between 2 and 10 inclusive only.";
  } else if (squareSize !== "" && typeof parseInt(squareSize) === "number") {
    let size = parseInt(squareSize);
    for(let i = 0; i < size; i++) {
      draw += "* ";
      for(let j = 1; j < size; j++) {
        if (i === 0 || (i === size - 1) || (j === size - 1)) {
          draw += "* ";
        } else {
          draw += "&nbsp;&nbsp;&nbsp;";
        }
      }
      draw += "<br>";
    }
    squareResults.innerHTML = draw;
  }
};
