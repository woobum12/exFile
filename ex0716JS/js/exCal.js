// 변수 선언
var num01 = 10;
var num02 = 20;
var num03 = 3;
var result;

// document.getElementById("cal").innerHTML = num01;

document.getElementById("cal01").innerHTML
= num01 + num02;

document.getElementById("cal02").innerHTML
= num01 - num02;

document.getElementById("cal03").innerHTML
= num01 * num02;

document.getElementById("cal04").innerHTML
= num02 / num03;

document.getElementById("cal05").innerHTML
= num01 % num03;

//result
// result = result + num01
result = 0;
document.getElementById("cal2_01").innerHTML
= result += num01;

// result = result - num01
result = 0;
document.getElementById("cal2_02").innerHTML
= result -= num01;

// result = result * num03 곱하기
result = 30;
document.getElementById("cal2_03").innerHTML
= result *= num03;

// result = result / num03 나누기
result = 30;
document.getElementById("cal2_04").innerHTML
= result /= num01;

// result = result % num03  나머지가 몇인가?
result = 33;
document.getElementById("cal2_05").innerHTML
= result %= num01;

// ---------------------------대입연산자
var d = document;
var num = 5;

// 선증가 : 증가 작업 후 변수 값을 출력한다
// 후증가 : 변수 값 출력후 증가 작업을 한다

d.getElementById("cal3_01").innerHTML = ++num; //선증가
d.getElementById("cal3_02").innerHTML = num;
d.getElementById("cal3_03").innerHTML = num++; //후증가
d.getElementById("cal3_04").innerHTML = num;
d.getElementById("cal3_05").innerHTML = --num; //선감소
d.getElementById("cal3_06").innerHTML = num;
d.getElementById("cal3_07").innerHTML = num--; //후감소
d.getElementById("cal3_08").innerHTML = num;

// ---------------------------백탁사용법
var a = 5, b = 6;
console.log("1문항의 답은",a+b,"입니다");
console.log("1문항의 답은"+ ( a + b )+"입니다")

d.getElementById("cal4_01").innerHTML
= "1문항의 답은" + (a + b) + "입니다";

//----------------------백탁사용법
var num1 = 5, num2 = 6;
var result2 = `1문항의 답은 ${num1 + num2} 입니다`
d.getElementById("cal5_01").innerHTML = result2

//----------------------비교연산자
var comA = 20; comB = 10, comC = "10";
var result3;

result3 = `comB가 comA보다 크다 ${comA > comB}`;
d.getElementById("cal6_01").innerHTML = result3;

result3 = `comB가 comA보다 작다 ${comB < comA}`;
d.getElementById("cal6_02").innerHTML = result3;

result3 = `comB랑 comC는 같다 ${comB == comC}`;
d.getElementById("cal6_03").innerHTML = result3;

result3 = `타입까지 다 같다 : C와 같다 ${comB === comC}`;
d.getElementById("cal6_04").innerHTML = result3;

result3 = `타입까지 다 같지 않다: C와 같다 ${comB !== comC}`;
d.getElementById("cal6_05").innerHTML = result3;