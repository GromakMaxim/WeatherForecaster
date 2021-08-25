package com.gromak.weather.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class WeatherService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String city = "Khabarovsk";
    private final String api = "a22709fab84fa637e50730003a1dc3b6";
    private final String measurementUnits = "metric";
    private final String language = "en";
    private String latitude = "48.48271";
    private String longitude = "135.08379";
    private String exclude = "minutely,hourly";

    public String getTodayWeather() {
        ResponseEntity<String> response = restTemplate.getForEntity("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api, String.class);
        System.out.println(response.getBody());
        return response.getBody();
    }

    public String getWeekWeather() {
        String link = "https://api.openweathermap.org/data/2.5/onecall?" +
                "&lat=" + latitude +
                "&lon=" + longitude +
                "&appid=" + api +
                "&lang=" + language +
                "&units=" + measurementUnits +
                "&exclude=" + exclude;
        ResponseEntity<String> response = restTemplate.getForEntity(link, String.class);
        System.out.println("Sending GET for: " + link);
        System.out.println("Weather: " + response.getBody());
        return response.getBody();
    }
}
