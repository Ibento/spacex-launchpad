/* ASORTED UTILITIES JAVASCRIPT FILE */


// Format date for launch info
var formatDate = function (date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];


  var day = date.getUTCDate();
  var monthIndex = date.getUTCMonth();
  var year = date.getFullYear();

  // add 0 if 1-9
  var minutes = date.getUTCMinutes();
  minutes = (minutes < 10) ? "0" + minutes : minutes;

  // add 0 if 1-9
  var hours = date.getUTCHours();
  hours = (hours < 10) ? "0" + hours : hours;

  return '<div>' + day + '. ' + monthNames[monthIndex] + ' ' + year + '<br>' + hours + ':' + minutes + ' (UTC)</div>';
};


// adding some periods to launch price
var numberWithPeriods = function(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};


// toggle info about rockets and launch pad for a launch
var toggleInfo = function (currentButton) {
    return function () {
        
        var rocket_info = document.getElementById("rocket_" + currentButton.id);
        var launchpad_info = document.getElementById("site_" + currentButton.id);
      

        if (currentButton.className === "plus_button") {
            currentButton.src = "img/minusbutton.svg";
            currentButton.className = "minus_button";
            rocket_info.setAttribute("style", "display:block");
            launchpad_info.setAttribute("style", "display:block");
        
            currentButton.nextSibling.innerHTML = "LESS<br>INFORMATION";
        } else {
            currentButton.src = "img/plusbutton.svg";
            currentButton.className = "plus_button";
            rocket_info.setAttribute("style", "display:none");
            launchpad_info.setAttribute("style", "display:none");
            currentButton.nextSibling.innerHTML = "MORE<br>INFORMATION";
        }

    
    };
};

// Change image element src to newSrc
var changeImage = function (element, newSrc) {
  var hoverElement = element;
  console.log(hoverElement.src);
  hoverElement.src = newSrc;
  console.log(hoverElement.src);
  
};

// get elements with hover class
var hoverElements = document.getElementsByClassName('hover');

// Change images for social links on mouse over
for (var i = 0;i < hoverElements.length; i++) {
  
    hoverElements[i].addEventListener('mouseover', function(e) {
      var mouseoverElement = e.srcElement;
      changeImage(mouseoverElement, "img/" + mouseoverElement.classList[0] + "_hover.png");
    });
}

// Change images for social links on mouse out
for (var i = 0;i < hoverElements.length; i++) {
  hoverElements[i].addEventListener('mouseout', function(e) {
    var mouseoutElement = e.srcElement;
    changeImage(mouseoutElement, "img/" + mouseoutElement.classList[0] + ".png");
  });
}

// show up arrow on scroll event
var scrollFunction = function () {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("upButton").style.display = "block";
  } else {
    document.getElementById("upButton").style.display = "none";
  }
};

// When user clicks on the button, scroll to the top of the document
var toTheTop = function () {

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.addEventListener('scroll', scrollFunction);
var upButton = document.getElementById('upButton');
upButton.addEventListener('click', toTheTop);

