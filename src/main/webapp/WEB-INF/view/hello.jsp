<%@ page contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Weather Forecast</title>
    <link rel="stylesheet" href="<c:url value="/resources/css/style.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/fonts.css"/>">
    <script type="text/javascript" src="<c:url value="/resources/js/index.js"/>"></script>
</head>
<body>
Hello!!!
<div class="table">
    <div class="field" id="today">
        <div class="day">Сегодня</div>
        <div class="date"></div>
        <div class="picture">
            <img class="icon-weather" src="<c:url value=""/>" alt="weather">
        </div>
        <div class="temp">
            <span class="temp_value">&deg</span>
        </div>
        <div class="temp-feel"></div>
        <div class="description"></div>
    </div>
    <div class="field" id="today2">
        <div class="day"></div>
        <div class="date"></div>
        <div class="picture">
            <img class="icon-weather" src="<c:url value=""/>" alt="weather">
        </div>
        <div class="temp">
            <span class="temp_value">&deg</span>
        </div>
        <div class="temp-feel"></div>
        <div class="description"></div>
    </div>
    <div class="field" id="today3">
        <div class="day"></div>
        <div class="date"></div>
        <div class="picture">
            <img class="icon-weather" src="<c:url value=""/>" alt="weather">
        </div>
        <div class="temp">
            <span class="temp_value">&deg</span>
        </div>
        <div class="temp-feel"></div>
        <div class="description"></div>
    </div>
    <div class="field" id="today4">
        <div class="day"></div>
        <div class="date"></div>
        <div class="picture">
            <img class="icon-weather" src="<c:url value=""/>" alt="weather">
        </div>
        <div class="temp">
            <span class="temp_value">&deg</span>
        </div>
        <div class="temp-feel"></div>
        <div class="description"></div>
    </div>
    <div class="field" id="today5">
        <div class="day"></div>
        <div class="date"></div>
        <div class="picture">
            <img class="icon-weather" src="<c:url value=""/>" alt="weather">
        </div>
        <div class="temp">
            <span class="temp_value">&deg</span>
        </div>
        <div class="temp-feel"></div>
        <div class="description"></div>
    </div>
    <div class="field" id="today6">
        <div class="day"></div>
        <div class="date"></div>
        <div class="picture">
            <img class="icon-weather" src="<c:url value=""/>" alt="weather">
        </div>
        <div class="temp">
            <span class="temp_value">&deg</span>
        </div>
        <div class="temp-feel"></div>
        <div class="description"></div>
    </div>
    <div class="field" id="today7">
        <div class="day"></div>
        <div class="date"></div>
        <div class="picture">
            <img class="icon-weather" src="<c:url value=""/>" alt="weather">
        </div>
        <div class="temp">
            <span class="temp_value">&deg</span>
        </div>
        <div class="temp-feel"></div>
        <div class="description"></div>
    </div>
</div>
</body>
</html>
