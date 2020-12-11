// overview jQuery accordion:
$('.answer').hide();
$('.minusIcon').hide();

$('.overviewPart1').click(function(e){
  if($('.answerPart1').hasClass('closePart1')) {
    $('.addIconPart1').show();
    $('.minusIconPart1').hide();
    $('.answerPart1').hide();
    $('.answerPart1').removeClass('closePart1');
  } else {
    $('.addIconPart1').hide();
    $('.minusIconPart1').show();
    $('.answerPart1').show();
    $('.answerPart1').addClass('closePart1');
  }
})

$('.overviewPart2').click(function(e){
  if($('.answerPart2').hasClass('closePart2')) {
    $('.addIconPart2').show();
    $('.minusIconPart2').hide();
    $('.answerPart2').hide();
    $('.answerPart2').removeClass('closePart2');
  } else {
    $('.addIconPart2').hide();
    $('.minusIconPart2').show();
    $('.answerPart2').show();
    $('.answerPart2').addClass('closePart2');
  }
})


// Part 1: Allow user to modify layout
let underlineCheckbox = document.getElementById("underlineTitle");
let italicCheckbox = document.getElementById("");

function drawColorButtons(color) {
  let colorPalette = document.getElementById("colorPalette");
  let newButton = document.createElement("button");
  newButton.style.width = "50px";
  newButton.style.height = "50px";
  newButton.style["background-color"] = color;
  newButton.classList.add("colorSquares");
  newButton.addEventListener("click", function (event) {
    let squareColor = this.style["background-color"];
    let htmlElement = document.querySelector("html");
    htmlElement.style["background-color"] = squareColor;
  });
  colorPalette.append(newButton);
}

drawColorButtons("#FF0000");
drawColorButtons("#00AA55");
drawColorButtons("#009FD4");
drawColorButtons("#D252B2");
drawColorButtons("#939393");
drawColorButtons("#B8860B");
drawColorButtons("#005051");
drawColorButtons("#E65722");
drawColorButtons("#000000");
drawColorButtons("#382903");

let h1Element = document.querySelector("h1");
let h2Element = document.querySelector("h2");
let htmlBody = document.getElementsByTagName("BODY")[0];
let textEditorContainer = document.querySelector(".textEditor");
let overviewButton = document.getElementById("overviewButton");
let navLi = document.querySelectorAll("nav a");


function toggleUnderline() {
  let underlineCheckbox = document.getElementById("underlineTitle");
  if (underlineCheckbox.checked) {
    h1Element.style["text-decoration"] = "underline";
    h2Element.style["text-decoration"] = "underline";
    textEditorContainer.style["text-decoration"] = "underline";
    overviewButton.style["text-decoration"] = "underline";
    navLi.forEach(function(element) {
      element.style["text-decoration"] = "underline";
    });    
  } else {
    h1Element.style["text-decoration"] = "none";
    h2Element.style["text-decoration"] = "none";
    textEditorContainer.style["text-decoration"] = "none";
    overviewButton.style["text-decoration"] = "none";
    navLi.forEach(function(element) {
      element.style["text-decoration"] = "none";
    }); 
  }
}

function toggleItalic() {
  let italicCheckbox = document.getElementById("italicTitle");
  if (italicCheckbox.checked) {
    textEditorContainer.style["font-style"] = "italic";
    h2Element.style["font-style"] = "italic";
    h1Element.style["font-style"] = "italic";
    overviewButton.style["font-style"] = "italic";
    navLi.forEach(function(element) {
      element.style["font-style"] = "italic";
    });  
  } else {
    h1Element.style["font-style"] = "normal";
    h2Element.style["font-style"] = "normal";
    textEditorContainer.style["font-style"] = "normal";
    overviewButton.style["font-style"] = "normal";
    navLi.forEach(function(element) {
      element.style["font-style"] = "normal";
    });  
  }
}

function toggleBold() {
  let boldCheckbox = document.getElementById("boldTitle");
  if (boldCheckbox.checked) {
    textEditorContainer.style["font-weight"] = "bolder";
    h2Element.style["font-weight"] = "bolder";
    h1Element.style["font-weight"] = "bolder";
    overviewButton.style["font-weight"] = "bolder";
    navLi.forEach(function(element) {
      element.style["font-weight"] = "bolder";
    });  
  } else {
    textEditorContainer.style["font-weight"] = "100";
    h2Element.style["font-weight"] = "100";
    h1Element.style["font-weight"] = "100";
    overviewButton.style["font-weight"] = "100";
    navLi.forEach(function(element) {
      element.style["font-weight"] = "100";
    }); 
  }
}

const rbs = document.querySelectorAll('input[name="fontSize"]');

function changeFontSize() {
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      let fontSize;
      switch(rb.value) {
        case "small":
          fontSize = "12px";
          break;
        case "medium":
          fontSize = "18px";
          break;
        case "large":
          fontSize = "24px";
          break;
        default:
          fontSize = "14px";
      }
      htmlBody.style["font-size"] = fontSize;
      h1Element.style["font-size"] = fontSize;
      overviewButton.style["font-size"] = fontSize;
      navLi.style["font-size"] = fontSize;
    }
  }
}