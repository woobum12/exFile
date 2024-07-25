// 변수선언
var demo = document.getElementById("demo");
var demo2 = document.getElementById("demo2");
var demo3 = document.getElementById("demo3");
var demo4 = document.getElementById("demo4");
var demo5 = document.getElementById("demo5");
var locAssign = document.getElementById("locAssign");

// 속성 함수 정의
function funStyle(obj, c, f){
    obj.style.backgroundColor = c;
    obj.style.fontSize = f;
}
//속성 함수 설정
funStyle(demo, "red", "2em");
funStyle(demo2, "orange", "1.8em");
funStyle(demo3, "yellow", "1.6em");
funStyle(demo4, "green", "1.4em");
funStyle(demo5, "blue", "1.2em");
funStyle(locAssign,"purple", "1em");

// 표현방법2
function funInnerHtml (obj, loc){
    obj.innerHTML = `${loc}`;
}
funInnerHtml(demo, locHref);
funInnerHtml(demo2, locHostName);
funInnerHtml(demo3, locPathName);
funInnerHtml(demo4, locProtocol);
funInnerHtml(demo5, locPort);


//속성정의
// demo.style.backgroundColor ="violet";
// demo.style.fontSize = "1.5em";
// demo2.style.backgroundColor ="pink";
// demo2.style.fontSize = "1.5em";
// demo3.style.backgroundColor ="yellow";
// demo3.style.fontSize = "1.5em";
// demo4.style.backgroundColor ="pink";
// demo4.style.fontSize = "1.5em";
// demo5.style.backgroundColor ="yellow";
// demo5.style.fontSize = "1.5em";

//값 정의
var locHref = window.location.href;
var locHostName = window.location.hostname;
var locPathName = window.location.pathname;
var locProtocol = window.location.protocol;
var locPort = window.location.port;
//표현
// demo.innerHTML = `${locHref}`
demo2.innerHTML = `${locHostName}`
demo3.innerHTML = `${locPathName}`
demo4.innerHTML = `${locProtocol}`
demo5.innerHTML = `${locPort}`


// locAssign.style.fontSize = "2em";

function newDoc() {
    const aUrl ="https://www.w3schools.com";
    window.location.assign(aUrl);
}

locAssign.onclick = newDoc