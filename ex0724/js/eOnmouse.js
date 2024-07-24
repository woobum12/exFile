var mOverOut = document.getElementById("mOverOut");
var mDownUp = document.getElementById("mDownUp");

function mOver(){
    this.innerHTML = "고마워"
    mOverOut.style.fontweight = "bold";
    this.style.backgroundColor = "pink";
    this.style.width = "160px";
    this.style.height = "120px";
    this.style.boxShadow = "20px -6px lightgray";
}
function mOut(){
    this.innerHTML = "마우스 올려봐"
    mOverOut.style.fontSize = "20px";
    this.style.width = "120px";
    this.style.height = "20px";
    this.style.border = "none";
    this.style.backgroundColor = "skyblue";
}
function mDown() {
    this.innerHTML = "버튼 때라";
    this.style.backgroundColor = "red";
    this.style.color = "white";
    this.style.fontweight = "bold";
}
function mUp() {
    this.innerHTML = "클릭 해봐";
    this.style.backgroundColor = "greenyellow";
    this.style.color = "black";
}

mOverOut.onmouseover = mOver;
mOverOut.onmouseout = mOut;
mDownUp.onmousedown = mDown;
mDownUp.onmouseup = mUp;