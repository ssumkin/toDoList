const weather = document.querySelector(".js-weather");

const API_KEY = "f9bccc4b0f5e8d4efc116cf82470e774"
const COORDS = "coords"



function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}°C \n${place}`;
    })
    
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // a:a == a  js 오브젝트에서 key = value일 경우 하나만 써도됨
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError(){
    console.log("Can't access geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError)
}


function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);

    if(loadCoords === null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}



function init(){
    loadCoords();
}

init()