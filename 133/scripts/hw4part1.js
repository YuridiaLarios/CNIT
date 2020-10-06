//the product and sum of every fourth integer from 5 to 21 inclusive 
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