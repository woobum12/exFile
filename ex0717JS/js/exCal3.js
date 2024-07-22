// 글로벌 == 전역
var i = 30;
var j = 15;
var d1 = document.getElementById("cal1");

window.onload = function(){
    // 삼항연산자
    // (조건) ? 참 일때 수행 : 거짓 일때 수행
var result = (i < j) ? "i가 j보다 작다" : "j가 i보다 작다";
// var result2 = (i < j) ? d1.innerHTML = "i가 j보다 작다" : 'd1.innerHTML = j가 i보다 작다'
console.log(result);

// 연산자 우선순위
/*-------------------
1) 수학에서 ()가 최우선 순위 연산하는것과 같다.
1.()

2) 괄호안에 있는 사칙연산을 수행중에 증감연산자를 만나면 증감연산자를 우선적으로 연산한다
) 하지만, 후행연산자는 이미연산하였지만, 특성상 사칙연산을 끝나고 감소증가를 하게된다.***
2. 증감연산자 ++ --
3) 기본적으로 ()안의 사칙연산 수행
3. 사칙연산
4) 이미 계산이 끝난 값들에 대해서 비교한다.
4. 비교연산자
5) 계산된 결과값을 변수에 담아준다.
5, 대입연산자
==================*/

var num = 5;
var sum = 15;
var result2 = ++num <= sum * 5;
console.log(result2);
}