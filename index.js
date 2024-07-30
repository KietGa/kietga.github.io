var myIndex = 0;
setTimeout(carousel, 4000);  

function carousel() {  
  var i;
  var x = document.querySelector(".carousel-control-next")
  console.log(x);
  x.click();
  setTimeout(carousel, 4000);  
}