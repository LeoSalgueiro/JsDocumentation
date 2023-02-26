// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

//get the buttons
const btnParseInt = document.getElementById('btn-parseInt')

// Get the modals
const modalParseInt = document.getElementById("modalParseInt");


// When the user clicks the button, open the modal 
btnParseInt.onclick = function() {
  modalParseInt.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalParseInt.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalParseInt) {
    modalParseInt.style.display = "none";
  }
}