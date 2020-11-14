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

//Status Bulb
function changeImage() {
  var image = document.getElementById('myImage');
  var x = document.getElementById("myBulb");
  if (image.src.match("bulb-on")) {
    image.src = "/smartapp-neo/img/bulb-off.png";
  } else {
    image.src = "/smartapp-neo/img/bulb-on.png";
  }
  
  if (x.innerHTML === "<b>ON</b>") {
    x.innerHTML = "<b>OFF</b>";
  } else {
    x.innerHTML = "<b>ON</b>";
  }
}
//End of Status Bulb

//Status Bulb
function changeImage2() {
  var image = document.getElementById('myImage2');
  var x2 = document.getElementById("myBulb2");
  if (image.src.match("bulb-off")) {
    image.src = "/smartapp-neo/img/bulb-on.png";
  } else {
    image.src = "/smartapp-neo/img/bulb-off.png";
  }
  
  if (x2.innerHTML === "<b>OFF</b>") {
    x2.innerHTML = "<b>ON</b>";
  } else {
    x2.innerHTML = "<b>OFF</b>";
  }
}
//End of Status Bulb


//random value
var random1 = Math.floor(Math.random() * 5) + 5;
document.getElementById("result1").innerHTML = random1;
//end of random value