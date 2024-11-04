const ele = document.getElementById("ele1") 
pintar = function(element, color='green'){
  element.style.backgroundColor = color
}
ele.addEventListener("click", function(){
pintar(ele,'yellow')
});


  