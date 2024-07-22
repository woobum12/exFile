//hide & show
// hide() jQuery를 사용하면 및 메서드를 사용하여 hTML 요소를 숨기거나 표시할 수 있습니다 show().
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    })
})