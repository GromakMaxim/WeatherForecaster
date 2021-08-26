import {ascii, getTemp, convert} from "./index.js";
import getDescriptionById from "./weather-description.js";


export function initCardSelection() {
    let cards = document.getElementsByClassName("field");
    for (let card of cards) {
        card.addEventListener("click", function (event) {
            event.preventDefault();
            if (card.classList.contains("selected-card")) {
                card.classList.remove("selected-card");
            } else {
                deselect(cards);
                card.classList.add("selected-card");
            }
            hourlyCardSelection();
        })
    }

}

function deselect(cards) {
    for (let card of cards) {
        card.classList.remove("selected-card");
    }
}

function hourlyCardSelection() {
    let cards = document.getElementsByClassName("field");
    let selected = false;
    for (let card of cards) {
        if (card.classList.contains("selected-card")) {
            selected = true;
            document.getElementsByClassName("weather-details")[0].classList.remove("hidden");
            break;
        }
    }
    if (!selected) document.getElementsByClassName("weather-details")[0].classList.add("hidden");
}

export function fillDetailsCard(json) {
    let index = 0;
    let cards = document.getElementsByClassName("field");
    for (let card of cards) {
        card.addEventListener("click", function (event) {
            event.preventDefault();

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
            index++;
        });
    }
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
    let cards = document.getElementsByClassName("field");

    //определяем, какая карточка выбрана
    for (let i = 0; i < 7; i++) {
        if (cards[i].classList.contains("selected-card")) {
            let start = 0;
            let end = 0;
            if (i === 0) {
                start = 0;
                end = start + 23;
            }
            if (i === 1) {
                start = 23;
                end = start + 24;
            }
            if (i === 2) {
                start = 47;
                end = start + 24;
            }
            if (i === 3) {
                start = 71;
                end = start + 24;
            }
            if (i === 4) {
                start = 96;
                end = start + 24;
            }
            if (i === 5) {
                start = 120;
                end = start + 24;
            }
            if (i === 6) {
                start = 144;
                end = start + 24;
            }
            if (i === 7) {
                start = 168;
                end = start + 24;
            }

            //в зависимости от выбранной карточки, забираем диапазон данных
            let array = new Array();
            for (start; start < end; start++) {
                array.push(hoursDataList[start]);
            }

            console.log(array);

            //перебираем нижние карточки
            for (let i = 0; i <= 7; i++){
                let arrayElement = array[i];

                let date = convert(arrayElement.dt);
                let hhmm = (('0' + date.getHours()).slice(-2)) + ":"
                    + (('0' + date.getMinutes()).slice(-2));

                let temp = (getTemp(arrayElement.temp));
                let icon = arrayElement.weather[0].icon + ".png";

                let detailCard = document.getElementsByClassName("detail-day")[i];
                let detailTime = detailCard.getElementsByClassName("detail-day-time")[0];
                let detailMiniIcon = detailCard.getElementsByClassName("detail-miniicon")[0];
                let detailTemp = detailCard.getElementsByClassName("detail-day-temper")[0];

                detailTime.textContent = hhmm;
                detailMiniIcon.setAttribute("src", "/resources/img/" + icon);
                detailTemp.textContent = temp+ ascii(176);
            }

        }

    }
}