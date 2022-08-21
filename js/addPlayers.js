const allSelectButtons = document.querySelectorAll(".select-btn");

for (const button of allSelectButtons) {
  button.addEventListener("click", function (event) {
    const playerName = event.target.parentNode.childNodes[1].innerText;
    console.log(playerName);
  });
}
