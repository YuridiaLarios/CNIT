  // Global Variables
  let item = [];
  let prices = [239.99, 129.75, 99.95, 350.89];
  let totalAmountSold = 0;
  let totalRevenue = 0;
  let totalWeeklyEarnings = 0;





  // constructor for item
  function Item(itemNum, price, numberOfItemsSold) {
    this.itemNum = itemNum;
    this.price = price;
    this.numberOfItemsSold = numberOfItemsSold;
    this.revenue = (price * numberOfItemsSold);
  }





  // Checking to see that the sales person field is not empty or fill with whitespace.
  function evaluateName() {
    let salesperson = $("#salesperson").val();
    return (salesperson.length !== 0 && salesperson.trim() !== '');
  }





  // Getting the items numbers and checking for positive numbers.
  function setItemObjects() {
    for (let i = 1; i <= 4; i++) {
      let tempItem = ($("#item" + i).val());
      if (tempItem >= 0) {
        item[i - 1] = new Item(i, prices[i - 1], parseFloat(tempItem));
      } else {
        $("#messages").html("<p class='invalidInput'># of items sold must be greater than zero!</p>");
      }
    }
  }





  // For each item, calculate the total amount sold and total revenue
  function outputTable() {
    let i = 1;
    item.forEach(function (item) {
      totalAmountSold += item.numberOfItemsSold;
      totalRevenue += item.revenue;
      $("#numSold" + i).val(item.numberOfItemsSold);
      $("#total" + i).val(item.revenue.toFixed(2));
      i++;
    });
  }





  // Display the total amount sold and total weekly earned.
  function displayFinalResults() {
    $("#totalAmountSold").val(parseFloat((totalRevenue).toFixed(2)));
    $("#totalWeekEarns").val(parseFloat((250 + (totalRevenue * 0.09)).toFixed(2)));
  }




  // Reset variables to zeros.
  function clear() {
    $("#messages").html("");
    totalAmountSold = 0;
    totalRevenue = 0;
    totalWeeklyEarnings = 0;
  }




  // Reset variables when resetButton is clicked.
  $("#part2ResetButton").click(function () {
    clear();
  });




  // Tooltip for salesperson input 
  $("#salesperson").tooltip({
    tooltipClass: "tooltip",
    position: {
      at: "right center"
    }
  });




  // Main Program
  $("#part2SubmitButton").click(function () {
    clear();
    if (evaluateName()) {
      setItemObjects();
      outputTable();
      displayFinalResults();
    } else {
      $("#messages").html("<p class='invalidInput'>Empty name input, salesperson's name required!</p>");
    }
  });