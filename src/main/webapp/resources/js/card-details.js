import {ascii, convert, getTemp} from "./index.js";
import getDescriptionById from "./weather-description.js";


export function fillDetailsCard(json) {
    let detailsCity = document.getElementsByClassName("details-city")[0];
    let currentCity = document.getElementsByClassName("table-city")[0];
    detailsCity.textContent = currentCity.textContent;

    let detailsTime = document.getElementsByClassName("currenttime")[0];
    detailsTime.textContent = getDateBySelectedCity(json);

    let detailsActualTemp = document.getElementsByClassName("detail-temp-big")[0];
    let actualTemp = Math.round(json.current.temp);
    if (actualTemp > 0) {
        actualTemp = "+" + actualTemp;
    } else if (actualTemp < 0) {
        actualTemp = "-" + actualTemp;
    }
    detailsActualTemp.textContent = actualTemp + ascii(176);

    let detailsPicture = document.getElementsByClassName("detail-pic")[0];
    let picLink = "/resources/img/" + json.current.weather[0].icon + ".png";
    detailsPicture.setAttribute("src", picLink);

    let detailDescription = document.getElementsByClassName("detail-description-msg")[0];
    detailDescription.textContent = getDescriptionById(json.current.weather[0].id, "eng");

    let detailFeelTemp = document.getElementsByClassName("detail-feel-temp")[0];
    detailFeelTemp.textContent = Math.round(json.current.feels_like) + ascii(176);

    let detailWind = document.getElementsByClassName("detail-wind")[0];
    detailWind.textContent = json.current.wind_speed + " м/сек";

    let detailHumidity = document.getElementsByClassName("detail-humidity")[0];
    detailHumidity.textContent = json.current.humidity + " %";

    let detailPressure = document.getElementsByClassName("detail-pressure")[0];
    detailPressure.textContent = Math.round(json.current.pressure / 1.333) + " мм р/c";

    fillHourlyData(json);
}

function getDateBySelectedCity(json) {
    let timeshift = json.timezone_offset * 1000; //api provides shift in seconds from UTC
    let curr = new Date();
    let utc = (curr.getTime() + curr.getTimezoneOffset() * 60 * 1000); //utc current time in msec
    let utcDate = new Date(utc + timeshift);//result date in msec
    let hours = ('0' + utcDate.getHours()).slice(-2);
    let minutes = ('0' + utcDate.getMinutes()).slice(-2);
    return hours + ":" + minutes;
}

function fillHourlyData(json) {
    let hoursDataList = json.hourly;

    let timeList = new Array();
    let picsList = new Array();
    let tempsList = new Array();

    for (let item of hoursDataList) {
        let date = convert(item.dt);
        let hhmm = (('0' + date.getHours()).slice(-2)) + ":"
            + (('0' + date.getMinutes()).slice(-2));
        timeList.push(hhmm);

        picsList.push("/resources/img/" + item.weather[0].icon + ".png");
        tempsList.push(getTemp(item.temp));
    }

    let detailCards = document.getElementsByClassName("detail-day");
    let index = 0;
    for (let detailCard of detailCards) {
        let time = detailCard.getElementsByClassName("detail-day-time")[0];
        let pic = detailCard.getElementsByClassName("detail-miniicon")[0];
        let temp = detailCard.getElementsByClassName("detail-day-temper")[0];

        time.textContent = timeList[index];
        pic.setAttribute("src", picsList[index]);
        temp.textContent = tempsList[index] + ascii(176);

        index++;
    }
}