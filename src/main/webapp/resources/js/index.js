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
    let jsonObj = JSON.parse(str);
    addDates(jsonObj.current.dt);
    addPictures(jsonObj);
    addTemperature(jsonObj)
}

function addTemperature(json) {
    let temperatureArray = new Array();
    let cards = document.getElementsByClassName("field");
    let todayTemperature = json.current.temp;
    temperatureArray.push(Math.ceil(todayTemperature));

    let dailyData = json.daily;
    for (let item of dailyData) {
        temperatureArray.push(Math.ceil(item.temp));
    }

    let index = 0;
    for (let card of cards) {
        let cardTemperature = card.children.item(3).children.item(0);
        if (temperatureArray[index] > 0) {
            cardTemperature.textContent = "+" + temperatureArray[index] + cardTemperature.textContent;
        } else if (temperatureArray[index] < 0) {
            cardTemperature.textContent = "-" + temperatureArray[index]+ cardTemperature.textContent;
        } else {
            cardTemperature.textContent = temperatureArray[index]+ cardTemperature.textContent;
        }
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
        let cardDate = card.children.item(1);
        let cardDayOfWeek = card.children.item(0);
        cardDayOfWeek.textContent = getWeekDayName(today);
        cardDate.textContent = (('0' + today.getDate()).slice(-2)) + "." +
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
    if (currentDay === 0) return "SUN"
    if (currentDay === 1) return "MON"
    if (currentDay === 2) return "TUE"
    if (currentDay === 3) return "WED"
    if (currentDay === 4) return "THU"
    if (currentDay === 5) return "FRI"
    if (currentDay === 6) return "SAT"
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