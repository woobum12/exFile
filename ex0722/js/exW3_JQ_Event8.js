// .focus()
// focus() 방법은 HTML 양식 필드에 이벤트 핸들러 함수를 연결합니다.
// 이 함수는 폼 필드에 포커스가 주어지면 실행됩니다.
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color","yellow");
    });
// .blur()
// blur() 방법은 HTML 양식 필드에 이벤트 핸들러 함수를 연결합니다.
// 이 함수는 폼 필드가 포커스를 잃을 때 실행됩니다.
    $("input").blur(function(){
        $(this).css("background-color","green");
    });
});