
var count = document.getElementsByClassName("row").length;
document.getElementById("count").textContent = count;


for (var i = 0; i < document.getElementsByClassName('trash').length; i++) {
  document.getElementsByClassName("trash")[i].addEventListener("click",
  function(){
  this.parentNode.remove()
  count -=1
  document.getElementById("count").textContent = count;
  })
;
}
