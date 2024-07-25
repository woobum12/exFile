var d = document;
var demo = d.getElementById("demo");
var demo2 = d.getElementById("demo2");
var demo3 = d.getElementById("demo3");
demo.style.backgroundColor = "violet";
demo.style.width = "300px";
demo.style.fontSize = "20px";
demo2.style.backgroundColor = "lightgreen";
demo2.style.fontSize = "1.5em";
demo3.style.backgroundColor = "pink";
demo3.style.fontSize = "1.5em";

//값정의
var screenWidth = screen.width;
var screenHeight = screen.height;
var screenAvalWidth = screen.availWidth;
var screemAvalHeight = screen.availHeight;
var screenColorDep = screen.colorDepth;
var screenPixelDep = screen.pixelDepth;

demo.innerHTML = `스크린의 내부넓이 : ${screenWidth}<br> 
스크린의 내부높이 ${screenHeight}`;

demo2.innerHTML = `스크린의 넓이: ${screenAvalWidth}<br>
스크린의 높이: ${screemAvalHeight}`;

demo3.innerHTML = `스크린화면 색상깊이: ${screenColorDep} <br>
스크린 화면픽셀깊이 ${screenPixelDep}`;
