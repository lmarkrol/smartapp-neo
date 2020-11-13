setInterval(function() {
    //location.reload();
}, 1000);

// Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value; 
  this.style.background = 'linear-gradient(to right, #7b88ad 0%, #82CFD0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
}

// End of Slider

//Status Indikator
function toogle() {
    var x = document.getElementById("bulbstatus");
    if (x.innerHTML === "ON") {
      x.innerHTML = "OFF";
    } else {
      x.innerHTML = "ON";
    }
  }
//End of Status Indikator
