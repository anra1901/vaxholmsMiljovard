let modal = document.getElementById("myModal");

let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}