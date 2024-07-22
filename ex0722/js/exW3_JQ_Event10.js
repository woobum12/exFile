// on() 요소 사용법
// 요소에다가 on() 을 사용하여 여러 이벤트 핸들러를 연결합니다.
$(document).ready(function(){
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
    },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
    },
        click: function(){
            $(this).css("background-color", "yellow");
        }
    });
});