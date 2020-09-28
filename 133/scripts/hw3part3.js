/* JQuery for validation displays error message if form input is not a number */
$(document).ready(function () {
  $("#temperatureForm").validate({
    // Rules for each input item
    rules: {
      temperature: {
        required: true,
        number: true
      }
    },

    messages: {

      temperature: "Please input a numeric value",
    },

    errorPlacement: function (error, element) {

      error.insertAfter(element);

    }
  });
});

// Returns the Celsius equivalent of a Fahrenheit temperature, using the calculation: C = 5/9 * (F - 32)
function celcius() {
  if ($("#temperatureForm").valid()) {
    var temperature = $("#temperature").val();
    $("#output").val(((5 / 9 * (temperature - 32)).toFixed(1) + " Celsius"));
  }
}

// Returns the Fahrenheit equivalent of a Celsius temperature, using the calculation: F = (9/5 * C) + 32
function farenheit() {
  if ($("#temperatureForm").valid()) {
    var temperature = $("#temperature").val();
    $("#output").val(((((9 / 5 * temperature) + 32).toFixed(1) + " Farenheit")));
  }
}