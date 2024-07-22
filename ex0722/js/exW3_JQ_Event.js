/* Click 방법은 HTML 요소에 이벤트 핸들러 함수를 연결합니다.
 해당 함수는 사용자가 HTML 요소를 클릭하면 실행됩니다.
 요소에서 클릭 이벤트가 발생하면 <p> 현재 <p> 요소를 숨깁니다*/


// $(문서).준비() 방법
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});