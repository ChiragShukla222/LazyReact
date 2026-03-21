package com.reactviz.controller;

import com.reactviz.dto.TopicDTO;
import com.reactviz.service.TopicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
@RequiredArgsConstructor
public class TopicController {

    private final TopicService topicService;

    @GetMapping
    public List<TopicDTO> getTopics(@RequestParam(value = "category", required = false) String category) {
        return topicService.getTopics(category);
    }

    @GetMapping("/{id}")
    public TopicDTO getTopic(@PathVariable Long id) {
        return topicService.getTopic(id);
    }
}

