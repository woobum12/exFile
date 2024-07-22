// ----- 저장되어있는 값
var id = 'main';
var pw = 'A0123';

// ----- 사용자가 입력한 값

var userId = 'main';
var userPw = 'A0123';

// -----
// var userProm = prompt("아이디를 입력하세요");
// var userPromPwd = prompt("패스워드를 입력하세요"); 

// ex3 -----
// var classA = prompt("A과목 점수를 입력하세요");
// var classB = prompt("B과목 점수를 입력하세요");

// ex4 ----
var numNot = 3 > 2;
var re = !numNot;
// 전체 페이지를 다 읽고 난 다음에 실행된다.
window.onload = function(){
    // AND조건 &&
    // OR조건 ||
    // not 조건 !
    

// ex1----
var result = ((id === userId) && (pw === userPw));
console.log(result);
// ex2---
// result = ((id === userProm)&&(pw === userPromPwd));
// console.log(result);

// result = ((classA > 70) || (classB > 70));
// console.log(result);

}