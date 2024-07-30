// text(): 태그안의 값을 text로 분석하여 가져오기
$("#btn1").click(function (e) { 
   document.querySelector("#result").innerHTML = 
   $("#myTxt").text();
    
});
// html(): 태그안의 값을 html로 분석하여 가져오기
$("#btn2").click(function (e) { 
     document.querySelector("#result").innerHTML =
     $("#myTxt").html();
    // alert($("#myTxt").html());
});
// val(): input박스안의 사용자 입력값을 가져오기
$("#btn3").click(function (e) { 
    document.querySelector("#result").innerHTML
    =$("#myVal").val();
});
$("#btn4").click(function (e) { 
    document.querySelector("#result").innerHTML =
    $("#result").attr("style");
});

$("#btn5").click(function (e) { 
    $("#result").attr("style", "border: 1px solid red");
    
});
