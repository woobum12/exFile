function myFun(){

    //  alert("3초가 지났습니다");
    // const d = new Date();
    // document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
// =====
var Interval = setInterval(myInterval, 1000);
function myInterval(){
    const t = new Date();
    document.getElementById("dat").innerHTML = t.toLocaleTimeString();
}