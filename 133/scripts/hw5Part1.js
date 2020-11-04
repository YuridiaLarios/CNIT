function validateForm(myForm) {
  let part1nameField = document.getElementById("userName").value;
  let part1emailField = document.getElementById("userEmail").value;
  let part1RoleDropdownoption = myForm.userJob.options[myForm.userJob.selectedIndex].value;
  let part1RadioButtons = document.querySelectorAll('input[name="salary"]');
  let selectedValue;


  alert("name: " + part1nameField);
  alert("email: " + part1emailField);
  alert(part1RoleDropdownoption);
  for (const part1RadioButton of part1RadioButtons) {
    if (part1RadioButton.checked) {
      selectedValue = part1RadioButton.value;
      break;
    }
  }
  alert(selectedValue);

}