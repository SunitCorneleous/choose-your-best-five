const allSelectButtons = document.querySelectorAll(".select-btn");

function setPlayerInList(player) {
  // player lis element
  const orderedList = document.getElementById("selected-players");

  // li created
  const li = document.createElement("li");
  li.innerText = player;
  orderedList.appendChild(li);
}

// disable button function
function disableButton(e) {
  const button = e.target;
  button.setAttribute("disabled", "true");
  button.classList.add("btn-disable");
}

// event listener added to all select buttons
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
