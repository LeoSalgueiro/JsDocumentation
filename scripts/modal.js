
// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
//const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const btnImagen = document.getElementById('btn-show-image')
//const cuadro = document.getElementById('soyImagen')

// When the user clicks the button, open the modal 
btnImagen.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}