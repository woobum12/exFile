// 함수 : 기능반복, 객체에서는 메서드

// 정의 : 정의만하고 실행X
function myfun(){
    console.log("함수만들기");
}

// 함수실행 : call : myFun()
myfun();

// 매개변수 myFun2(argument)
function myfun(arg1){
    console.log(arg1);
    console.log("함수만들기");
}
myfun(22);
myfun("22");
var argu = 33;
myfun(argu);

// 돌아간다 return
function myfun3(arg1){
    console.log("함수만들기");
    return (arg1 * 2);
}
var re = myfun3(arg1);

// 익명함수
// 화살표 사용법