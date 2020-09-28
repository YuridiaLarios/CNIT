let num1;
let num2;
let answer;
let userAnswer;





// Resets outputs divs to empty.
function clear() {
  $("#rightAnswer").html("");
  $("#wrongAnswer").html("");
}





// displays the original look of the page.
function endScript() {
  clear();
  $("#generateNumsButton").show();
  $("#questionBox").html("");
}





// Generates 2 random numbers, displays a multiplication question
// Displays input field so user can input their answer.
function generateNumbers() {
  clear();
  num1 = Math.floor(Math.random() * (10 - 0)) + 0;
  num2 = Math.floor(Math.random() * (10 - 0)) + 0;
  answer = num1 * num2;

  $("#generateNumsButton").hide();
  $("#questionBox").html(`How much is ${num1} times ${num2}? <br>`);
  $("#questionBox").show().append(`<br>
    <label for="userAnswer">Input your answer here: </label>
    <input type="number" id="userAnswer" name="userAnswer" size="10" autofocus>
    <input type="button" onclick="checkAnswer()" value="Check Answer">`);
  $("#userAnswer").focus();
}





/* If answer is correct, it displays a "good job" message and prompts user to either
   keep getting  a new question or stop the script.
   if incorrect, user has to keep trying to answer until answer is correct.
*/
function checkAnswer() {
  clear();
  userAnswer = $("#userAnswer").val();
  if (parseInt(userAnswer) == answer) {
    $("#questionBox").hide();
    $("#rightAnswer").append(`Very Good!<br>Keep going?<br>
                                <input type="button" onclick="generateNumbers()" value="Yes">
                                <input type="button" onclick="endScript()" value="No">
                              `);
  } else {
    $("#wrongAnswer").html(`No. Please try again!`);
    $("#userAnswer").val('').focus();
  }
}