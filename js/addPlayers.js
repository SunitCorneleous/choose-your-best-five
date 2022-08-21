const allSelectButtons = document.querySelectorAll(".select-btn");

function setPlayerInList(player) {
  const orderedList = document.getElementById("selected-players");

  const li = document.createElement("li");
  li.innerText = player;
  orderedList.appendChild(li);
}

function disableButton(e) {
  const button = e.target;
  button.setAttribute("disabled", "true");
  button.classList.add("btn-disable");
}

for (const button of allSelectButtons) {
  button.addEventListener("click", function (event) {
    const playerName = event.target.parentNode.childNodes[1].innerText;
    const orderedList = document.querySelectorAll("ol li");

    if (orderedList.length < 5) {
      setPlayerInList(playerName);
      disableButton(event);
    } else {
      alert("Maximum players added");
    }
  });
}
