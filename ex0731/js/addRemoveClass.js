$("#btn1").click(function (e) { 
    $("#h1color, #h2color, #pcolor").addClass("blue");
    $("#divIm").addClass("important");
});
$("#btn2").click(function (e) { 
    $("#divIm2").addClass("blue important")
    
});
$("#btn3").click(function (e) { 
    $("#divIm2").removeClass("blue")
    
});
$("#btn4").click(function (e) { 
    // $("#h1color","#h2color","#pcolor").addClass("blue");
    $("#h1color","#h2color","#pcolor").toggleClass("blue");
    
});