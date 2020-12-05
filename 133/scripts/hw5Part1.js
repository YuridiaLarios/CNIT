let buttonPressedCounter = 0;

Element.prototype.appendBefore = function (element) {
  element.parentNode.insertBefore(this, element);
},false;

Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
},false;

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

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

function validateForm(myForm) {
  let validForm = true;

  // console.log(buttonPressedCounter);
  buttonPressedCounter++;
  if (buttonPressedCounter >= 2) {
    removeCurrentErrorState();
  }

  let part1nameField = document.getElementById("userName");
  let part1emailField = document.getElementById("userEmail");
  let part1DropdownDiv = document.getElementById("job");
  let part1RoleDropdownoption = myForm.userJob.options[myForm.userJob.selectedIndex].value;
  let part1RadioButtonsDiv = document.getElementById("radioInputFields");
  let part1RadioButtons = document.querySelectorAll('input[name="salary"]');
  let part1CheckboxesDiv = document.getElementById("part1CheckboxesDiv");
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
  let selectedDropdownRole = "none";
  let selectedRadioValue = "none";
  let checkboxesChecked = [];

  let part1NameValue = part1nameField.value.trim();
  let part1EmailValue = part1emailField.value.trim();

  // validate name
  if (part1NameValue === "") {
    part1nameField.classList.add("errorRedStage");
    createErrorDiv("ERROR: your name cannot be blank", part1nameField);
    validForm = false;
  }

  // validate email
  if (part1EmailValue === "") {
    part1emailField.classList.add("errorRedStage");
    createErrorDiv("ERROR: your email cannot be blank", part1emailField);
    validForm = false;
  } else if (!isEmail(part1EmailValue)) {
    part1emailField.classList.add("errorRedStage");
    createErrorDiv("ERROR: Not a valid email", part1emailField);
    validForm = false;
  }

  // validate dropdown value
  switch(part1RoleDropdownoption) {
    case "ux_developer":
      selectedDropdownRole = "UX developer";
      break;
    case "backend_developer":
      selectedDropdownRole = "backend developer";
      break;
    case "full_developer":
      selectedDropdownRole = "full stack developer";
      break;
    case "ios_developer":
      selectedDropdownRole = "ios developer";
      break;
    case "android_developer":
      selectedDropdownRole = "android developer";
      break;
    case "startup_owner":
      selectedDropdownRole = "startup owner";
      break;
    case "freelancer":
      selectedDropdownRole = "freelancer";
      break;
  }

  if (selectedDropdownRole === "none") {
    part1DropdownDiv.classList.add("errorRedStage");
    createErrorDiv("ERROR: Select an option", part1DropdownDiv);
    validForm = false;
  }

  // validate radio buttons
  for (const part1RadioButton of part1RadioButtons) {
    if (part1RadioButton.checked) {
      if(part1RadioButton.value === "under") {
        selectedRadioValue = "under 100K";
      } else if (part1RadioButton.value === "over") {
        selectedRadioValue = "over 100K";
      }
      break;
    }
  }
  if (selectedRadioValue === "none") {
    part1RadioButtonsDiv.classList.add("errorRedStage");
    createErrorDiv("ERROR: Select an option", part1RadioButtonsDiv);
    validForm = false;
  }

  // Validate that at least one checkbox is checked
  if (!checkedOne) {
    part1CheckboxesDiv.classList.add("errorRedStage");
    createErrorDiv("ERROR: Select at least one checkbox", part1CheckboxesDiv);
    validForm = false;
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      // And stick the checked ones onto an array...
      if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
      }
    }
  }

  // Submit form after validation is successful and show success screen
  if (validForm) {
    document.getElementById("interestForm").remove();
    document.getElementById("successFormSubmitted").innerText = `Hi ${part1NameValue}! we will use ${part1EmailValue} to send you updates on 
    your role of interest: ${selectedDropdownRole} with a salary ${selectedRadioValue} and technologies related to: ${checkboxesChecked.join(', ').toString()}`;
  }
}
