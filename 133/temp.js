
		/* JQuery for validation
		displays error message if form input is not a number
		*/

		$(document).ready(function () {
			$("#myform").validate({
				// Rules for each input item
				rules: {
					itemOne: {
						required: true,
						number: true
					},
					itemTwo: {
						required: true,
						number: true
					},

					itemThree: {
						required: true,
						number: true
					},

					itemFour: {
						required: true,
						number: true
					}


				}
			});
		});


		function getSales() {



			if ($("#myform").valid()) {

				//declare variables

				var iOne, iTwo, iThree, iFour, totalO, totalTw, totalTh, totalFo, totalOne, totalTwo, totalThree, totalFour, totalWeek, totalSold, totalWeekly;

				// define variables and get input number from getElementById

				var iOne = parseFloat(document.getElementById("itemOne").value);
				var iTwo = parseFloat(document.getElementById("itemTwo").value);
				var iThree = parseFloat(document.getElementById("itemThree").value);
				var iFour = parseFloat(document.getElementById("itemFour").value);

				//Multiply to get the total amount made by each item and round to 2 digits
				var totalOne = parseFloat(iOne * 239.99).toFixed(2)
				var totalTwo = parseFloat(iTwo * 129.75).toFixed(2)
				var totalThree = parseFloat(iThree * 99.95).toFixed(2)
				var totalFour = parseFloat(iFour * 350.89).toFixed(2)

				//Calculate the total number sold and amount made, round to 2 digits
				var totalSold = (iOne + iTwo + iThree + iFour);
				var totalWeekly = (((+totalOne + +totalTwo + +totalThree + +totalFour)*.09) + 200).toFixed(2);

				//Show results in form fields

				document.getElementById("numsoldOne").value = iOne;
				document.getElementById("numsoldTwo").value = iTwo;
				document.getElementById("numsoldThree").value = iThree;
				document.getElementById("numsoldFour").value = iFour;

				document.getElementById("totalOne").value = totalOne;
				document.getElementById("totalTwo").value = totalTwo;
				document.getElementById("totalThree").value = totalThree;
				document.getElementById("totalFour").value = totalFour;

				document.getElementById("totalSold").value = totalSold;
				document.getElementById("totalWeekly").value = totalWeekly;



			}
		}
