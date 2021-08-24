package com.gromak.weather;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MyController {
    private WeatherService service;
    public MyController() {
        service = new WeatherService();
    }

    @RequestMapping("/")
    public String init(){
        return "hello.jsp";
    }

    @RequestMapping("/today-weather")
    @ResponseBody
    public String getTodayWeather(){
        return service.getTodayWeather();
    }

    @RequestMapping("/week-weather")
    @ResponseBody
    public String getNextWeekWeather(){
        return service.getWeekWeather();
    }

}
