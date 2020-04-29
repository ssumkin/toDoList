const body = document.querySelector("body");

const IMG_NUMBER = 4;



function open_chatroom(randomNumber){
    var windowWidth = window.innerWidth;
    if(windowWidth > 400) {
        paintImage(randomNumber);
    }
}
    
 

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image); 
}


function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    open_chatroom(randomNumber);
}

init();