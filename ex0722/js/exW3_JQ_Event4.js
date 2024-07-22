// mouseleave()
// 이 mouseleave() 방법은 HTML 요소에 이벤트 핸들러 함수를 연결합니다.
// 마우스 포인터가 HTML 요소를 벗어날 때 함수가 실행됩니다.

$(document).ready(function(){
    $("#p1").mouseleave(function(){
        alert("Bye! You now leave p1!");
    });
});