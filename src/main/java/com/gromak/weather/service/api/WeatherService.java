package com.gromak.weather.service.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class WeatherService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String link = "https://api.openweathermap.org/data/2.5/onecall?";
    private final String city = "Khabarovsk";
    private final String api = "a22709fab84fa637e50730003a1dc3b6";
    private final String measurementUnits = "metric";
    private final String language = "en";
    private String latitude = "48.48271";
    private String longitude = "135.08379";
    private String exclude = "minutely";

    public String getWeekWeather() {
        String requestLink = link +
                "&lat=" + latitude +
                "&lon=" + longitude +
                "&appid=" + api +
                "&lang=" + language +
                "&units=" + measurementUnits +
                "&exclude=" + exclude;
        ResponseEntity<String> response = restTemplate.getForEntity(requestLink, String.class);
        System.out.println("Sending GET for: " + requestLink);
        System.out.println("Weather: " + response.getBody());
        return response.getBody();
    }

    public String getWeekWeather(String lat, String lon) {
        String requestLink = link +
                "&lat=" + lat +
                "&lon=" + lon +
                "&appid=" + api +
                "&lang=" + language +
                "&units=" + measurementUnits +
                "&exclude=" + exclude;
        ResponseEntity<String> response = restTemplate.getForEntity(requestLink, String.class);
        System.out.println("Sending GET for: " + link);
        System.out.println("Weather: " + response.getBody());
        return response.getBody();
    }
}
