package com.reactviz.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/facts")
public class CatFactController {

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping
    public Object getFacts() {
        String url = "https://cat-fact.herokuapp.com/facts";
        return restTemplate.getForObject(url, Object.class);
    }
}