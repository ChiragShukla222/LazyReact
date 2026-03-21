package com.reactviz.controller;

import com.reactviz.dto.AuthRequestDTO;
import com.reactviz.dto.AuthResponseDTO;
import com.reactviz.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public AuthResponseDTO register(@RequestBody AuthRequestDTO request) {
        String token = userService.register(request);
        return new AuthResponseDTO(token);
    }

    @PostMapping("/login")
    public AuthResponseDTO login(@RequestBody AuthRequestDTO request) {
        String token = userService.login(request);
        return new AuthResponseDTO(token);
    }
}

