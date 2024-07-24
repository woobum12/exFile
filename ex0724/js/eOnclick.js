function myFun(id){
    id.innerHTML = "나는 2번째 H1이야";
}

function myFun3(id) {
    myH1.innerHTML = Date() + "오늘날짜입니다.";
}

var myH1 = document.getElementById("myH1");
myH1.onclick = myFun3;