package com.gromak.weather.controller;

import com.gromak.weather.service.api.WeatherService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WeatherController {
    private final WeatherService service;

    public WeatherController() {
        service = new WeatherService();
    }

    @RequestMapping("/")
    public String init() {
        return "hello.jsp";
    }

    @RequestMapping("/today-weather")
    @ResponseBody
    public String getTodayWeather() {
        return service.getTodayWeather();
    }

    @RequestMapping("/week-weather")
    @ResponseBody
    public String getNextWeekWeather() {
        return service.getWeekWeather();
    }

    @RequestMapping("/week-weather-coordinates")
    @ResponseBody
    public String getNextWeekWeather(@RequestParam("lat") String lat, @RequestParam("lon") String lon) {
        return service.getWeekWeather(lat, lon);
    }
}
