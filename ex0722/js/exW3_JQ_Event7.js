// hover()
// 이 방법은 두 가지 함수를 사용하고 및 방법을 hover () 결합한 것입니다 .mouseenter(), mouseleave()
// 첫 번째 함수는 마우스가 HTML 요소에 들어갔을 때 실행되고, 두 번째 함수는 마우스가 HTML 요소를 벗어날 때 실행됩니다.
$(document).ready(function(){
    $("#p1").hover(function(){
        alert("마우스 커서를 올려봐");
    });
});