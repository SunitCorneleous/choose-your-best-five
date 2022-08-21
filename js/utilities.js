// get input value by id
function getInputValueById(elementId) {
  const element = document.getElementById(elementId);
  const value = parseFloat(element.value);

  return value;
}

// set innertext by id
function setElementInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
