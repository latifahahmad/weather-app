
let cityName = document.getElementById("city");
let locatio = document.getElementById("location");
let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let feelsLike = document.getElementById("feels-like");
let visibility = document.getElementById("visibility");
let pressure = document.getElementById("pressure");
let uvIndex = document.getElementById("uv-index");

let xhr = new XMLHttpRequest();

function getWeather() { 
    if (cityName.value === "") {
        alert("Please enter a city name!");
    }else{

        xhr.open("GET", `https://api.weatherapi.com/v1/current.json?key=15522493832d47a99e2224929240910&q=${cityName.value}&aqi=no`);
        
        xhr.onload = ()=>{
            if(xhr.status === 200){
                let data = JSON.parse(xhr.responseText);
                console.log(data);
        
                locatio.innerText = data.location.name;
            }
        }
        
    }
    
    xhr.send();
}
