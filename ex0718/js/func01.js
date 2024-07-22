var result01 = document.getElementById("func1");
var result02 = document.getElementById("func2");
var result03 = document.getElementById("func3");
var result04 = document.getElementById("func4");
var result05 = document.getElementById("func5");
var result06 = document.getElementById("func6");
var result07 = document.getElementById("func7");

// ----------------------함수 선언------------------
function line(params) {

    // 특정기능을 반복 사용하기 위해서
    result01.innerHTML += "<p>" + "**********" + "<p>";
}
line();
line();
line();
line();
line();
// ------------------------------------------------
// 함수를 이용한 구구단
var dan = 2;
result = 0;

function multiply(i){
    // result02.innerHTML = result02.innerHTML + (dan * i);
    result02.innerHTML += dan + "*" + i + "=" + (dan * i) + "<br>";
}
for(let i=1; i<10; i++){
    multiply(i+1);
}

//---------------------- 함수를 이용한 더하기 -----------------------
function add(num01, num02){
    var hap = num01 + num02;
    
    result03.innerHTML += hap + "<br>";

}
add(2, 3);
add(12, 88);
add(44, 456);
// ------------------ 함수를 이용한 버튼 이벤트 처리------------------
function flower(flowerName){

    switch(flowerName){
        case "무궁화" : alert("무궁화동호회를 추천합니다.");
        break;
        case "장미" : alert("장미동호회를 추천합니다.");
        break;
        case "국화" : alert("국화 동호회를 추천합니다.");
    }
}
// flower(flowerName)

// --------------------- 함수 return -------------------------------

// 전역 global
result = 0;
var first = 13;
var last = 7;


function all(first, last){
    //함수내의 지역
    var sam = first + last;

    return sam;
}
var result = all(first, last);
result05.innerHTML += "결과값 : " + result;
//------------------------- 110 P ---------------------
var num = 1;

function love(){
    var a = num + 1;
    result06.innerHTML += "결과 : " + a;
}
love();
//------------------------- 지역 변수 ----------------------
var num111 = 1;

function love1(){
    // var를 생략하고 사용하면 전역변수가 된다.
    str = "산";
    var strInner = "강";
    console.log("함수내에서 출력:"+ str);
    console.log("함수밖에서 출력:"+ strInner);

    return strInner;
}
// 첫 번째 함수 콜
love1();
console.log("---------")

// 두 번째 함수 콜 + return
// return된 지역변수strInner값을 recStr에 담는다.
var recStr = love1();
console.log("나는 return 된 값", recStr);