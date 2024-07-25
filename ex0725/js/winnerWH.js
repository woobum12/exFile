var d = document;
var demo = d.getElementById("demo");
demo.style.backgroundColor = "violet";
demo.style.width = "300px";
demo.style.fontSize = "20px";


var winInnerWidth = window.innerWidth;
var winInnerHeight = window.innerHeight;


demo.innerHTML = `윈도우의 내부넓이 : ${winInnerWidth}<br> 
윈도우의 내부높이 ${winInnerHeight}`;