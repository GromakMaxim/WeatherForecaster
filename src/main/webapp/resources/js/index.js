import getDescriptionById from "./getDescriptionById.js"

console.log("i am working, dirty bitches");

let address = "http://localhost:29999";
let endpoint = "/week-weather"
let request = new XMLHttpRequest();

request.open('GET', address + endpoint, true);
request.send();

request.onreadystatechange = function () {
    if (request.readyState === 4) {
        process(request.responseText);
    }
}

function process(str) {
    let json = JSON.parse(str);

    addDates(json.current.dt);

    let actualTemps = new Array();
    let feelTemps = new Array();
    let pictures = new Array();
    let descriptions = new Array();
    let pressures = new Array();
    let humidityList = new Array();
    let winds = new Array();

    let actualTemp = Math.ceil(json.current.temp);
    let feelTemp = Math.ceil(json.current.feels_like);

    if (actualTemp > 0) {
        actualTemps.push("+" + actualTemp);
    } else if (actualTemp < 0) {
        actualTemps.push("-" + actualTemp);
    } else {
        actualTemps.push(actualTemp);
    }

    if (feelTemp > 0) {
        feelTemps.push("+" + feelTemp);
    } else if (actualTemps < 0) {
        feelTemps.push("-" + feelTemp);
    } else {
        feelTemps.push(feelTemp);
    }

    pictures.push(json.current.weather[0].icon + ".png");
    descriptions.push(getDescriptionById(json.current.weather[0].id, "eng"));
    pressures.push(Math.ceil(json.current.pressure / 1.333));
    humidityList.push(json.current.humidity);
    winds.push(json.current.wind_speed);

    let dailyData = json.daily;
    for (let item of dailyData) {
        let actualTemper = Math.ceil(item.temp.day);
        let feelTemper = Math.ceil(item.feels_like.day);

        if (actualTemper > 0) actualTemps.push("+" + actualTemper);
        if (actualTemper < 0) actualTemps.push("-" + actualTemper);
        if (actualTemper === 0) actualTemps.push(actualTemper);

        if (feelTemper > 0) feelTemps.push("+" + feelTemper);
        if (feelTemper < 0) feelTemps.push("-" + feelTemper);
        if (feelTemper === 0) feelTemps.push(feelTemper);

        pictures.push(item.weather[0].icon + ".png");
        descriptions.push(getDescriptionById(item.weather[0].id, "eng"));
        pressures.push(Math.ceil(item.pressure / 1.333));
        humidityList.push(item.humidity);
        winds.push(item.wind_speed);
    }

    let cards = document.getElementsByClassName("field");
    let index = 0;
    for (let card of cards) {

        let fieldActualTemp = card.getElementsByClassName("temp_actual").item(0);
        let fieldFeelTemp = card.getElementsByClassName("temp_feel").item(0);
        fieldActualTemp.textContent = actualTemps[index] + fieldActualTemp.textContent;
        fieldFeelTemp.textContent = feelTemps[index] + fieldFeelTemp.textContent;

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


function addTemperature(json) {
    let temperatureArray = new Array();
    let feelTemperaturesArray = new Array();
    let cards = document.getElementsByClassName("field");
    let todayTemperature = json.current.temp;
    let todayFeelTemperature = json.current.feels_like;
    temperatureArray.push(Math.ceil(todayTemperature));
    feelTemperaturesArray.push(Math.ceil(todayFeelTemperature));

    let dailyData = json.daily;
    for (let item of dailyData) {
        temperatureArray.push(Math.ceil(item.temp.day));
        feelTemperaturesArray.push(Math.ceil(item.feels_like.day));
    }

    let index = 0;
    for (let card of cards) {
        let cardTemperature = card.children.item(3).children.item(0);
        let cardFeelTemperature = card.children.item(3).children.item(1);
        if (temperatureArray[index] > 0) {
            cardTemperature.textContent = "+" + temperatureArray[index] + cardTemperature.textContent;
            cardFeelTemperature.textContent = "+" + feelTemperaturesArray[index] + cardFeelTemperature.textContent;
        } else if (temperatureArray[index] < 0) {
            cardTemperature.textContent = "-" + temperatureArray[index] + cardTemperature.textContent;
            cardFeelTemperature.textContent = "-" + feelTemperaturesArray[index] + cardFeelTemperature.textContent;
        } else {
            cardTemperature.textContent = temperatureArray[index] + cardTemperature.textContent;
            cardFeelTemperature.textContent = feelTemperaturesArray[index] + cardFeelTemperature.textContent;
        }
        index++;
    }
}

function addPictures(json) {
    let iconsArray = new Array();
    let cards = document.getElementsByClassName("field");
    let todayPicture = json.current.weather[0].icon;
    iconsArray.push(todayPicture);

    let dailyData = json.daily;
    for (let item of dailyData) {
        let weatherData = item.weather;
        for (let item of weatherData) {
            iconsArray.push(item.icon);
        }
    }
    let index = 0;
    for (let card of cards) {
        let cardPicture = card.children.item(2).children.item(0);
        let link = "/resources/img/" + iconsArray[index] + ".png";
        cardPicture.setAttribute("src", link);
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

function convertTimestamp(timestamp) {
    let d = new Date(timestamp * 1000); // Convert the passed timestamp to milliseconds
    let yyyy = d.getFullYear();
    let month = ('0' + (d.getMonth() + 1)).slice(-2);  // Months are zero based. Add leading 0.
    let date = ('0' + d.getDate()).slice(-2);
    let hour = ('0' + d.getHours()).slice(-2);
    let minutes = ('0' + d.getMinutes()).slice(-2);     // Add leading 0.
    let resultTime = date + "." + month + "." + yyyy;
    return resultTime;
}