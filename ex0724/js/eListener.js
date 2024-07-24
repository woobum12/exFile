var d = document;
var btn = d.getElementById("btn");
var date = d.getElementById("date");
var btnOverOut = d.getElementById("btnOverOut");
var viewOverOut = d.getElementById ("viewOverOut");

function displayDate(){
    // this.innerHTML = Date();
    date.innerHTML = Date();
}
function mytext(e){
    let myEvent = e.type;

    viewOverOut.innerHTML = `('^')☞${myEvent}☜('^')`
}

btn.addEventListener("click", displayDate);
btnOverOut.addEventListener("mouseover",mytext);
btnOverOut.addEventListener("mouseout", mytext);
btnOverOut.addEventListener("mouseup", mytext);
btnOverOut.addEventListener("mousedown", mytext);