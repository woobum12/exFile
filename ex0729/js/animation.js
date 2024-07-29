$("button").click(function () { 
    $("#block1").animate({
        left:'250px'
        
    });
    
});

$("button").click(function () { 
    $("#block2").animate({
        left:'250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
    
});

$("button").click(function () { 
    $("#block3").animate({
        left:'250px',
        height: '+=150px',
        width: '+=150px'
    });
    
});