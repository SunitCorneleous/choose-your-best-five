// calculate total player expense
document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerExpense = getInputValueById("per-player");

  const orderedList = document.querySelectorAll("ol li");
  const playerListLength = orderedList.length;

  // total player expenses
  const totalPlayerCost = perPlayerExpense * playerListLength;

  if (isNaN(perPlayerExpense)) {
    alert("Enter valid number");
  } else {
    // set total expenses
    setElementInnerTextById("player-expenses", totalPlayerCost);
  }
});

// calculate total expenses
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const totalPlayerExpenseElement =
      document.getElementById("player-expenses");
    const totalPlayer = parseFloat(totalPlayerExpenseElement.innerText);
    const managerExpense = getInputValueById("manager");
    const coachExpense = getInputValueById("coach");

    const totalExpense = totalPlayer + managerExpense + coachExpense;

    if (isNaN(managerExpense) || isNaN(coachExpense)) {
      alert("Enter valid number");
    } else {
      // set total expenses
      setElementInnerTextById("total-expenses", totalExpense);
    }
    // set total expenses
  });
