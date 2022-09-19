let weather = {
    "apiKey":"b6093c0e8b004eb6521c187a6798d584",
    "fetchWeather":function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apiKey+"&units=metric;")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data){
        const {name} = data;
        const {icon,description} = data.weather[0]
        const {temp,humidity} = data.main
        const {speed} = data.wind;
        document.querySelector(".city").innerHTML = "Weather in "+ name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = parseFloat (temp -273.15).toFixed(2) + "° C";
        document.querySelector(".humidity").innerHTML ="humidity: "+ humidity +"%";
        document.querySelector(".wind").innerHTML ="Wind speed: " + speed + " km/h";
        document.querySelector(".wether").classList.remove("loading");
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document
    .querySelector(".search button")
    .addEventListener("click",function(){
        weather.search();
});

document.querySelector('.search-bar').addEventListener("keyup",function(event){
    if(event.key == 'Enter'){
        weather.search()
    }
});

weather.fetchWeather("chennai")