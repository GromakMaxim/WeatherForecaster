export default function getDescriptionById(code, lang) {
    if (lang === "ru") {
        if (code === 200) return "Гроза с небольшим дождем";
        if (code === 201) return "Гроза с дождем";
        if (code === 202) return "Гроза с сильным дождем";
        if (code === 210) return "Легкая гроза";
        if (code === 211) return "Гроза";
        if (code === 212) return "Сильная гроза";
        if (code === 221) return "Рваная гроза";
        if (code === 230) return "Гроза с легкой моросью";
        if (code === 231) return "Гроза с моросящим дождем";
        if (code === 232) return "Гроза с сильным моросящим дождем";

        if (code === 300) return "Легкая морось";
        if (code === 301) return "Морось";
        if (code === 302) return "Сильный изморось";
        if (code === 310) return "Легкий моросящий дождь";
        if (code === 311) return "Моросящий дождь";
        if (code === 312) return "Сильный моросящий дождь";
        if (code === 313) return "Ливень и морось";
        if (code === 314) return "Сильный ливень с моросью";
        if (code === 321) return "Ливень";

        if (code === 500) return "Легкий дождь";
        if (code === 501) return "Умеренный дождь";
        if (code === 502) return "Сильный дождь";
        if (code === 503) return "Очень сильный дождь";
        if (code === 504) return "Экстремальный дождь";
        if (code === 511) return "Ледяной дождь";
        if (code === 520) return "Ливень с интенсивностью света";
        if (code === 521) return "Ливень с дождем";
        if (code === 522) return "Сильный ливень";
        if (code === 531) return "Неровный ливень";

        if (code === 600) return "Легкий снег";
        if (code === 601) return "Снег";
        if (code === 602) return "Сильный снегопад";
        if (code === 611) return "Мокрый снег";
        if (code === 612) return "Дождь с мокрым снегом";
        if (code === 613) return "Дождь со снегом";
        if (code === 615) return "Небольшой дождь и снег";
        if (code === 616) return "Дождь и снег";
        if (code === 620) return "Снег с легким дождем";
        if (code === 621) return "Снег в душе";
        if (code === 622) return "Сильный снегопад";

        if (code === 701) return "Туман";
        if (code === 711) return "Дым";
        if (code === 721) return "Дымку";
        if (code === 731) return "Вихри песка/ пыли";
        if (code === 741) return "Туман";
        if (code === 751) return "Песок";
        if (code === 761) return "Пыль";
        if (code === 762) return "Вулканический пепел";
        if (code === 771) return "Шквалы";
        if (code === 781) return "Торнадо";

        if (code === 800) return "Чистое небо";
        if (code === 801) return "Несколько облаков: 11-25%";
        if (code === 802) return "Рассеянные облака: 25-50%";
        if (code === 803) return "Переменная облачность: 51-84%";
        if (code === 804) return "Облачность: 85-100%";
    }

    if (lang === "eng") {
        if (code === 200) return "Thunderstorm with light rain";
        if (code === 201) return "Thunderstorm with rain";
        if (code === 202) return "Thunderstorm with heavy rain";
        if (code === 210) return "Light thunderstorm";
        if (code === 211) return "Thunderstorm";
        if (code === 212) return "Heavy thunderstorm";
        if (code === 221) return "Ragged thunderstorm";
        if (code === 230) return "Thunderstorm with light drizzle";
        if (code === 231) return "Thunderstorm with drizzle";
        if (code === 232) return "Thunderstorm with heavy drizzle";

        if (code === 300) return "Light intensity drizzle";
        if (code === 301) return "Drizzle";
        if (code === 302) return "Heavy intensity drizzle";
        if (code === 310) return "Light intensity drizzle rain";
        if (code === 311) return "Drizzle rain";
        if (code === 312) return "Heavy intensity drizzle rain";
        if (code === 313) return "Shower rain and drizzle";
        if (code === 314) return "Heavy shower rain and drizzle";
        if (code === 321) return "Shower drizzle";

        if (code === 500) return "Light rain";
        if (code === 501) return "Moderate rain";
        if (code === 502) return "Heavy intensity rain";
        if (code === 503) return "Very heavy rain";
        if (code === 504) return "Extreme rain";
        if (code === 511) return "Freezing rain";
        if (code === 520) return "Light intensity shower rain";
        if (code === 521) return "Shower rain";
        if (code === 522) return "Heavy intensity shower rain";
        if (code === 531) return "Ragged shower rain";

        if (code === 600) return "Light snow";
        if (code === 601) return "Snow";
        if (code === 602) return "Heavy snow";
        if (code === 611) return "Sleet";
        if (code === 612) return "Light shower sleet";
        if (code === 613) return "Shower sleet";
        if (code === 615) return "Light rain and snow";
        if (code === 616) return "Rain and snow";
        if (code === 620) return "Light shower snow";
        if (code === 621) return "Shower snow";
        if (code === 622) return "Heavy shower snow";

        if (code === 701) return "Mist";
        if (code === 711) return "Smoke";
        if (code === 721) return "Haze";
        if (code === 731) return "Sand/ dust whirls";
        if (code === 741) return "Fog";
        if (code === 751) return "Sand";
        if (code === 761) return "Dust";
        if (code === 762) return "Volcanic ash";
        if (code === 771) return "Squalls";
        if (code === 781) return "Tornado";

        if (code === 800) return "Clear sky";
        if (code === 801) return "Few clouds: 11-25%";
        if (code === 802) return "Scattered clouds: 25-50%";
        if (code === 803) return "Broken clouds: 51-84%";
        if (code === 804) return "Overcast clouds: 85-100%";
    }
}