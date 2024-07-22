//mouseEnter()
//이 mouseEnter() 방법은 HTML 요소에 이벤트 핸들러 함수를 연결합니다.
// 해당 함수는 마우스 포인터가 HTML 요소에 들어갔을때 실행됩니다.

$(document).ready(function(){
    $("#p1").mouseenter(function(){
        alert("You entered p1!");
    });
});