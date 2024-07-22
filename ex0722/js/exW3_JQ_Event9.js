// on()
// 이 on() 메서드는 선택된 요소에 대한 하나 이상의 이벤트 핸들러를 연결합니다.
// 요소에 클릭 이벤트를 첨부합니다. <p>

$(document).ready(function(){
    $("p").on("click", function(){
        $(this).hide();
    });
});