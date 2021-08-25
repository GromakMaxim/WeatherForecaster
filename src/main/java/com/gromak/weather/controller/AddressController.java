package com.gromak.weather.controller;

import com.gromak.weather.service.AddressService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AddressController {

    private final AddressService addressService;

    public AddressController() {
        this.addressService = new AddressService();
    }

    @RequestMapping(value = "/address", method = RequestMethod.GET)
    @ResponseBody
    public String getCoordinates(@RequestParam("city") String queryCity) {
        return addressService.getCoordinates(queryCity);
    }

}
