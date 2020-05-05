const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const name = document.getElementById("nameForm"),
user = document.querySelector(".user"),
delUser = user.querySelector("button");


const USER_LS = "currentUser",
SHOWING_CN = "showing";



function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault();
    const currentInputValue = input.value;
    name.style.display = "none";
    paintGreeting(currentInputValue);
    saveName(currentInputValue);
}



function askForName(){ //유저가 없을 때 이름 물어보는 함수
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}





function paintGreeting(text){ //유저가 있을 때 class를 추가해서 보이게 하고 인사함
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    user.querySelector("h3").classList.add(SHOWING_CN);
    greeting.innerText = `${text}`;
    user.querySelector("h3").innerText = `${text}`;
}



function localName(){ //유저 존재 유무 확인
    const currentUser = localStorage.getItem(USER_LS); 

    if(currentUser === null){ //유저가 없을 때
        askForName();
        name.style.display = "block";
        name.style.zIndex = 10;
    } else{ //유저가 존재 할 때 
        paintGreeting(currentUser);
    }
}





function menu(){
    if(user.style.marginLeft == "0px"){
        user.style.marginLeft = "-500px";
    } else{
        user.style.marginLeft = "0px";
    }
}
 


function delteUser(){
    localStorage.removeItem(USER_LS)
    location.reload();
}



function init(){ //처음 작동 함수 
    localName(); 
    greeting.addEventListener("click", menu);
    delUser.addEventListener("click", delteUser);
}

init();