function myAlert(){
    alert("나는 알림박스야");
}
function myConfirm(){
    // confirm("확인해주세요");
    var re = document.getElementById("re");
    var result = confirm("확인해주세요");
    if(result){
        // 확인버튼을 눌렀을때 이부분을 수행
        re.innerHTML = "확인";
    }else{
        // 취소버튼을 눌렀을때 이부분을 수행
        re.innerHTML = "취소";
    }
}

function myPrompt(){
    var reProm = document.getElementById("reProm");
    var resultProm = prompt("이름을 입력하세요");
    // reProm.innerHTML = resultProm;

    // && AND연산, || OR 연산
    if(resultProm == null){
        // 사용자가 취소버튼을 눌렀을때
        reProm.innerHTML = "입력을 취소하셨습니다.";
    }
    else if(resultProm == ""){
        // 사용자의 입력값이 null이나 ""공백일때 수행
        reProm.innerHTML = "값을 입력하지 않았습니다.";
    }
    else{
        // 사용자가 값을 입력했을때
        reProm.innerHTML = resultProm + "안녕하세요!";
    }
}
