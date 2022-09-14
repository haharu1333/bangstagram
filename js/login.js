"use strict";

const loginId = document.getElementById('LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginBtn = document.getElementById('LOGIN_BTN');
const loginMg = document.getElementById('LOGIN_Difficult');

function color() {
    if((loginId.value=='031227@bang.com'&&loginPw.value=='bsh031227')
        && loginPw.value.length>=5){
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.disabled = false;
        loginMg.innerText="환영합니다."

    }else{
        loginBtn.style.backgroundColor = "#C0DFFD";
        loginBtn.disabled = true;
        loginMg.innerText="올바른 계정을 입력해야 버튼이 활성화 됩니다."

    }
}

function moveToMain(){
    location.replace("./main.html");
}



loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click', moveToMain);

//  if((loginId.value.length>0 && loginId.value.indexOf("@")!==-1)
