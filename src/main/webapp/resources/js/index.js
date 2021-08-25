import getDescriptionById from "./weather-description.js"
import sendRequest from "./sendRequest.js";
import initCities from "./cities.js";

initCities();//initialize a list of cities to fill in suggestions when entering a city

let url = "http://localhost:29999";
//getting default weather
sendRequest(url + "/week-weather", "GET", true, process);
document.getElementsByClassName("table-city")[0].textContent = "Хабаровск";

let okCityBtn = document.getElementsByClassName("submit-city")[0];
okCityBtn.addEventListener('click', function (event) {
    event.preventDefault();

    let selectedCity = document.getElementsByClassName("selected_city")[0].value;
    if (selectedCity !== "" && typeof selectedCity !== "undefined") {

        //getting coordinates by city name
        sendRequest(url +"/address?city=" + selectedCity, "GET", true, function (json) {
            let lat = json[0].geo_lat;
            let lon = json[0].geo_lon;
            if (lat !== null && lon !== null) {

                //getting new weather by city name
                console.log("City: " + selectedCity + " Received new coordinates: " + lat + " " + lon);
                document.getElementsByClassName("table-city")[0].textContent = selectedCity;
                sendRequest(url +"/week-weather-coordinates?lat=" + lat + "&lon=" + lon, "GET", true, process);
            }
        });
    }
});

function getTemp(tempValue){
    let actualTemp = Math.round(tempValue);
    if (actualTemp > 0) return "+" + actualTemp;
    if (actualTemp < 0) return "-" + actualTemp;
    if (actualTemp === 0) return actualTemp;
}

function process(json) {
    addDates(json.current.dt);

    let actualTemps = new Array();
    let feelTemps = new Array();
    let pictures = new Array();
    let descriptions = new Array();
    let pressures = new Array();
    let humidityList = new Array();
    let winds = new Array();

    actualTemps.push(getTemp(json.current.temp));
    feelTemps.push(getTemp(json.current.feels_like));

    pictures.push(json.current.weather[0].icon + ".png");
    descriptions.push(getDescriptionById(json.current.weather[0].id, "eng"));
    pressures.push(Math.ceil(json.current.pressure / 1.333));
    humidityList.push(json.current.humidity);
    winds.push(json.current.wind_speed);

    let dailyData = json.daily;
    for (let item of dailyData) {

        actualTemps.push(getTemp(item.temp.day));
        feelTemps.push(getTemp(item.feels_like.day));

        pictures.push(item.weather[0].icon + ".png");
        descriptions.push(getDescriptionById(item.weather[0].id, "eng"));
        pressures.push(Math.round(item.pressure / 1.333));
        humidityList.push(item.humidity);
        winds.push(item.wind_speed);
    }

    let cards = document.getElementsByClassName("field");
    let index = 0;
    for (let card of cards) {

        let fieldActualTemp = card.getElementsByClassName("temp_actual").item(0);
        let fieldFeelTemp = card.getElementsByClassName("temp_feel").item(0);
        fieldActualTemp.textContent = actualTemps[index] + ascii(176);
        fieldFeelTemp.textContent = feelTemps[index] + ascii(176);

        let fieldPicture = card.getElementsByClassName("icon-weather").item(0);
        let link = "/resources/img/" + pictures[index];
        fieldPicture.setAttribute("src", link);

        let fieldDescription = card.getElementsByClassName("description").item(0);
        fieldDescription.textContent = descriptions[index];

        let fieldPressure = card.getElementsByClassName("pressure").item(0);
        fieldPressure.textContent = "Давление: " + pressures[index] + " мм рт. ст.";

        let fieldHumidity = card.getElementsByClassName("humidity").item(0);
        fieldHumidity.textContent = "Влажность: " + humidityList[index] + "%";

        let fieldWing = card.getElementsByClassName("wind_speed").item(0);
        fieldWing.textContent = "Ветер: " + winds[index] + " м/сек";

        index++;
    }
}

function addDates(timestamp) {
    let today = convert(timestamp);
    let cards = document.getElementsByClassName("field");
    for (let card of cards) {
        card.children[0].textContent = getWeekDayName(today) + " " + (('0' + today.getDate()).slice(-2)) + "." +
            ('0' + (today.getMonth() + 1)).slice(-2) + "." +
            today.getFullYear();

        today.setDate(today.getDate() + 1);//add +1day
    }
}

function convert(timestamp) {
    return new Date(timestamp * 1000);
}

function getWeekDayName(today) {
    let currentDay = today.getDay();
    if (currentDay === 1) return "Понедельник"
    if (currentDay === 2) return "Вторник"
    if (currentDay === 3) return "Среда"
    if (currentDay === 4) return "Четверг"
    if (currentDay === 5) return "Пятница"
    if (currentDay === 6) return "Суббота"
    if (currentDay === 0) return "Воскресенье"
}

function ascii(a) {
    return String.fromCharCode(a);
}