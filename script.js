function showDiv(divId) {
      const allDivs = document.querySelectorAll('.content');
      allDivs.forEach(div => {
        div.style.display = 'none';
      });

      const selectedDiv = document.getElementById(divId);
      selectedDiv.style.display = 'block';
    }
    
/* COLLAPSIBLE */

var collapsible = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var info = this.nextElementSibling;
    if (info.style.display === "block") {
      info.style.display = "none";
    } else {
      info.style.display = "block";
    }
  });
}