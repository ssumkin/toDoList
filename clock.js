const clockContainer = document.querySelector(".js-clock"), 
clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    

    var windowWidth = window.innerWidth;
    if(windowWidth > 500) {
        clockTitle.innerText = `${hours < 13 ?  `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}` //:${second < 10 ? `0${second}` : second }
    } else{
        clockTitle.innerText = `${hours < 13 ? (hours<10 ? `AM 0${hours}` : `AM ${hours}`) : (hours<10 ? `PM 0${hours-12}` : `PM ${hours-12}`)}:${minutes < 10 ? `0${minutes}` : minutes}:${second < 10 ? `0${second}` : second }` 
    }
    
    

    
}





function init(){
    getTime();
    setInterval(getTime, 1000);
}

init()