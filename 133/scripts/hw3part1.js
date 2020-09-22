var hwAvg;
var midExam;
var finalExam;
var participation;
var letterGrade;
var finalAverage;
var retake;
var invalidInput;






/*
This function gets the user's input values
and checks for valid input numbers between 0 and 100.
*/
function getValues(){
    hwAvg = parseInt($("#hwAverage").val());
    midExam = parseInt($("#midtermExam").val());
    finalExam = parseInt($("#finalExam").val());
    participation = parseInt($("#participation").val());
    var values = [hwAvg, midExam, finalExam, participation];
    values.forEach(function(val){
        if (isNaN(val) || val < 0 || val > 100 ){
            invalidInput = true;
        }
    });
}





/*
This function calculates the final average using the given formula
and also calculates its corresponding letter grade.
*/
function calculateFinalGrades(){
    finalAverage = Math.round((.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation));

    switch(true) {
        case (finalAverage >= 90):
            letterGrade = "A";
            break;
        case (finalAverage >= 80):
            letterGrade = "B";
            break;
        case (finalAverage >= 70):
            letterGrade = "C";
            break;
        case (finalAverage >= 60):
            letterGrade = "D";
            retake = true;
            break;
        default:
            letterGrade = "F";
            retake = true;
    }
}





/*
This function appends 2 new rows to our gradesTable to show the Final Average
and its corresponding letter grade. It also displays a message if the student
needs to retake the course. And it disables the submit button.
*/
function display(){
    $('#gradesTable > tbody:last-child').append(`<tr class="output"><td>Final Average: </td>
                                              <td><input type="number" class="numField FinalAvg" disabled maxlength="3"
                                              value="${finalAverage}"</td></tr><tr class="output"><td>Final Letter Grade: </td><td><input type="text"
                                              class="numField FinalAvg" disabled maxlength="3" value="${letterGrade}"</td></tr>`);
    if(retake){
        $("#messageOutput").append("<p class='output retake-msg'>Student must retake the course</p>");
    }
}




/*
This function is called when clicking the submit button.
It initializes both boolean variables as false, to set them ready for
further testing, and removes any output values (if any) from previous submissions.
*/
function clear() {
    retake = false;
    invalidInput = false;
    hwAvg = "";
    midExam = "";
    finalExam = "";
    participation = "";
    letterGrade = "";
    finalAverage = "";
    $(".output").remove();
}





/*
This function removes any output values (if any) from previous submissions,
and enables the submit button to be clickable again to allow to try new grades.
*/
$("#part1ResetButton").click(function(){
    $("#part1SubmitButton").prop("disabled",false);
    $(".output").remove();
});





/*
  MAIN FUNCTION
*/
$("#part1SubmitButton").click(function(){
    clear();
    getValues();
    if(invalidInput){
        $("#messageOutput").html("<p class='output retake-msg'>Values must be between 0 and 100</p>");
    } else{
        calculateFinalGrades();
        display();
    }
});
