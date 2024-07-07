const inputBox = document.querySelector('.inputbox');
const searchBtn = document.getElementById('searchBtn');
const cloud_img = document.querySelector('.cloud-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');



async function checkWeather(city){
    const api_key = "c9e1734eb5e610c4bf587266dd41677f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());



    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            cloud_img.src = "download.png";
             break;
        case 'Clear':
                cloud_img.src = "images.jpeg" ;
             break;
        case 'Rain':
                    cloud_img.src = "download.jpeg";
             break;      
         case 'Snow':
                        cloud_img.src = "download (1).jpeg";
             break;
             case 'Mist':
                        cloud_img.src = "245-2454364_clip-art-black-and-white-fog-clipart-foggy.png";
             break;
    }
    console.log(weather_data);
}


searchBtn.addEventListener('click' , ()=>{
    checkWeather(inputBox.value);
});


