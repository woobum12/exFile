//더블클릭()
// 이 dblclick() 방법은 HTML 요소에 이벤트 핸들러 함수를 연결합니다.
// 사용자가 HTML 요소를 두 번 클릭하면 해당 함수가 실행됩니다.

$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    });
});
