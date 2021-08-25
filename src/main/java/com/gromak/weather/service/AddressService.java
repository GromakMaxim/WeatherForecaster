package com.gromak.weather.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

public class AddressService {
    private final String url = "https://cleaner.dadata.ru/api/v1/clean/address";
    private final String api = "9959954ea7418befc430c6158474cbacf3fad316";
    private final String secret = "c4b8a7ae3de46643df5b3fb2c98ad8bd5558a256";

    public String getCoordinates(String queryCity) {
        String requestBody = "[ \"" + queryCity + "\" ]";

        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.add("Content-Type", "application/json");
        headers.add("Authorization", "Token " + api);
        headers.add("X-Secret", secret);

        RestTemplate restTemplate = new RestTemplate();

        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
        System.out.println("Coordinates: " + response.getBody());
        return response.getBody();
    }
}
