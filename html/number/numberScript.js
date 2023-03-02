// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];
const span4 = document.getElementsByClassName("close")[3];

//get the buttons
const btnParseInt = document.getElementById('btn-parseInt')
const btnNaN = document.getElementById('btn-nan')
const btnDivision = document.getElementById('btn-divisionRemainder')
const btnToString = document.getElementById('btn-toString')

// Get the modals
const modalParseInt = document.getElementById("modalParseInt");
const modalNaN = document.getElementById("modalNaN");
const modalDivision = document.getElementById("modalDivisionReminder");
const modalToString = document.getElementById("modalToString");
  


//EVENTS

//add events when click button to open modal. Pass for param the close span and modal to open specific modal
btnParseInt.addEventListener('click', () =>{
  openModal(span, modalParseInt)
})

btnNaN.addEventListener('click', () =>{
  openModal(span2, modalNaN)
})

btnDivision.addEventListener('click', () =>{
  openModal(span3, modalDivision)
})

btnToString.addEventListener('click', () =>{
  openModal(span4, modalToString)
})



//FUNCTIONS 

const openModal = function (span, modal) {

  // When the user clicks the button, open the modal 
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } 
  }


}

