<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Weather Forecast</title>
    <link rel="stylesheet" href="<c:url value="/resources/css/style.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/fonts.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/general.css"/>">

    <script type="module" src="<c:url value="/resources/js/index.js"/>"></script>
</head>
<body>
<div class="table">
    <div class="field" id="day1">
        <div class="date"></div>
        <div class="upper">
            <div class="pic">
                <img class="icon-weather" src="<c:url value=""/>" alt="weather">
            </div>
            <div class="temp_data">
                <div class="temp_actual">&deg</div>
                <div class="feelslike">Ощущается:</div>
                <div class="temp_feel">&deg</div>
            </div>
        </div>
        <div class="bottom">
            <div class="description"></div>
            <div class="pressure"></div>
            <div class="humidity"></div>
            <div class="wind_speed"></div>
        </div>
    </div>

    <div class="field" id="day2">
        <div class="date"></div>
        <div class="upper">
            <div class="pic">
                <img class="icon-weather" src="<c:url value=""/>" alt="weather">
            </div>
            <div class="temp_data">
                <div class="temp_actual">&deg</div>
                <div class="feelslike">Ощущается:</div>
                <div class="temp_feel">&deg</div>
            </div>
        </div>
        <div class="bottom">
            <div class="description"></div>
            <div class="pressure"></div>
            <div class="humidity"></div>
            <div class="wind_speed"></div>
        </div>
    </div>

    <div class="field" id="day3">
        <div class="date"></div>
        <div class="upper">
            <div class="pic">
                <img class="icon-weather" src="<c:url value=""/>" alt="weather">
            </div>
            <div class="temp_data">
                <div class="temp_actual">&deg</div>
                <div class="feelslike">Ощущается:</div>
                <div class="temp_feel">&deg</div>
            </div>
        </div>
        <div class="bottom">
            <div class="description"></div>
            <div class="pressure"></div>
            <div class="humidity"></div>
            <div class="wind_speed"></div>
        </div>
    </div>

    <div class="field" id="day4">
        <div class="date"></div>
        <div class="upper">
            <div class="pic">
                <img class="icon-weather" src="<c:url value=""/>" alt="weather">
            </div>
            <div class="temp_data">
                <div class="temp_actual">&deg</div>
                <div class="feelslike">Ощущается:</div>
                <div class="temp_feel">&deg</div>
            </div>
        </div>
        <div class="bottom">
            <div class="description"></div>
            <div class="pressure"></div>
            <div class="humidity"></div>
            <div class="wind_speed"></div>
        </div>
    </div>

    <div class="field" id="day5">
        <div class="date"></div>
        <div class="upper">
            <div class="pic">
                <img class="icon-weather" src="<c:url value=""/>" alt="weather">
            </div>
            <div class="temp_data">
                <div class="temp_actual">&deg</div>
                <div class="feelslike">Ощущается:</div>
                <div class="temp_feel">&deg</div>
            </div>
        </div>
        <div class="bottom">
            <div class="description"></div>
            <div class="pressure"></div>
            <div class="humidity"></div>
            <div class="wind_speed"></div>
        </div>
    </div>

    <div class="field" id="day6">
        <div class="date"></div>
        <div class="upper">
            <div class="pic">
                <img class="icon-weather" src="<c:url value=""/>" alt="weather">
            </div>
            <div class="temp_data">
                <div class="temp_actual">&deg</div>
                <div class="feelslike">Ощущается:</div>
                <div class="temp_feel">&deg</div>
            </div>
        </div>
        <div class="bottom">
            <div class="description"></div>
            <div class="pressure"></div>
            <div class="humidity"></div>
            <div class="wind_speed"></div>
        </div>
    </div>

    <div class="field" id="day7">
        <div class="date"></div>
        <div class="upper">
            <div class="pic">
                <img class="icon-weather" src="<c:url value=""/>" alt="weather">
            </div>
            <div class="temp_data">
                <div class="temp_actual">&deg</div>
                <div class="feelslike">Ощущается:</div>
                <div class="temp_feel">&deg</div>
            </div>
        </div>
        <div class="bottom">
            <div class="description"></div>
            <div class="pressure"></div>
            <div class="humidity"></div>
            <div class="wind_speed"></div>
        </div>
    </div>

</div>
</body>
</html>
