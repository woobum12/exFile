var result = document.getElementById("result");

$("p").on(
        
    "click", function () {
    result.innerHTML = $(this).attr("id");
    $(this).hide();

});

$("#muti_on").on({
    mouseenter: function (){    
    $(this).css("background-color","lightcyan");
    
},
    mouseleave: function () { 
        $(this).css("background-color", "yellow");
        
},
    click: function(){
        $(this).css("background-color", "violet");
},
    dblclick: function(){
        $(this).css("background-color", "blue");
}
}); 