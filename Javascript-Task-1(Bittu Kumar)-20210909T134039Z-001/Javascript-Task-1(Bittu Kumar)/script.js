var gen1Value = localStorage.getItem("gen1Value");
var gen2Value = localStorage.getItem("gen2Value");
var passNumber = localStorage.getItem("passNumber");
console.log(gen1Value);
console.log(gen2Value);
console.log(passNumber);

const container = document.getElementById("cnt");
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

var check=0;
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;

  if(selectedSeatsCount>=passNumber)
  {
    check++;
  }
}

//Seat click event
container.addEventListener('click', e => {
 if(check==0)
 { 
      if(gen1Value=="female" || gen2Value=="female")
      {
          if (e.target.classList.contains('occupiedforladies') || e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
        {
          e.target.classList.toggle('selected');
        }
      }
      else if (e.target.classList.contains('seat') && !e.target.classList.contains('occupiedforladies') && !e.target.classList.contains('occupied'))
      {
        e.target.classList.toggle('selected');
      }
  }    
 
  if(check==1)
  {
    alert("You are choosing more seats");
  }
  updateSelectedCount();
});


function myFunction(){
  alert("Your Booking is confirmed,Happy Journey");
  window.location="screen1.html";
  return false;
}
