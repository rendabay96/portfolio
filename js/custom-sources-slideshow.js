var slideIndex = [1, 1, 1, 1];
showDivs(slideIndex[0], 0);
showDivs(slideIndex[1], 1);
showDivs(slideIndex[2], 2);
showDivs(slideIndex[3], 3);

function plusDivs(n, m) {
  showDivs(slideIndex[m] += n, m);
}

function showDivs(n, m) {
  var i;
  var x = document.getElementsByClassName(`mySlides-${m}`);
  if (n > x.length) {slideIndex[m] = 1}
  if (n < 1) {slideIndex[m] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[m]-1].style.display = "block";
}