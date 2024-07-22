// mouseup()
// 이 mouseup() 방법은 HTML 요소에 이벤트 핸들러 함수를 연결합니다.
// 이 함수는 마우스가 HTML 요소 위에 있는 동안 왼쪽, 가운데 또는 오른쪽 마우스 버튼을 놓으면 실행됩니다.

$(document).ready(function(){
    $("#p1").mouseup(function(){
        alert("마우스 업!");
    });
});