var d = document;
var x = d.getElementById("e_hover");
x.innerHTML = "test";




$("#e_hover").hover(
    
    function () {
        // over
        this.innerHTML = "마우스 오버했습니다.";
        
    }, function () {
        // out
        this.innerHTML = "마우스 아웃했습니다";
    }
);