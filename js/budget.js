// calculate total player expense
document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerExpense = getInputValueById("per-player");

  const orderedList = document.querySelectorAll("ol li");
  const playerListLength = orderedList.length;

  // total player expenses
  const totalPlayerCost = perPlayerExpense * playerListLength;

  // set total expenses
  setElementInnerTextById("player-expenses", totalPlayerCost);
});

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const totalPlayerExpenseElement =
      document.getElementById("player-expenses");
    const totalPlayer = parseFloat(totalPlayerExpenseElement.innerText);
    const managerExpense = getInputValueById("manager");
    const coachExpense = getInputValueById("coach");

    const totalExpense = totalPlayer + managerExpense + coachExpense;

    // set total expenses
    setElementInnerTextById("total-expenses", totalExpense);
  });
