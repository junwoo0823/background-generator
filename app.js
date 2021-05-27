// alert('테스트');

var body = document.getElementById('gradient'); // 바디 태그
var color1 = document.querySelector('.color1'); // 컬러입력창
var color2 = document.querySelector('.color2'); // 컬러입력창
var h3 = document.querySelector('h3');          // 빈태그 h3

// 이벤트 연결
color1.addEventListener('input', grad);
color2.addEventListener('input', grad);

function grad(){
    body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
    h3.textContent = body.style.background;
}