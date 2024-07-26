var btn = document.getElementById("btn");
btn.style.fontSize = "1.6em";

var bt2 = document.getElementById("btn2");
bt2.style.fontSize = "1.6em";

// var output = document.getElementById("output");
function goHistory2(){
    location.assign("./bomHistory.html")
}

function goBack(){
    window.history.back();
}
function goForward(){
    window.history.forward();
}