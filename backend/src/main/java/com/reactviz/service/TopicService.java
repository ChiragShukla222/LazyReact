package com.reactviz.service;

import com.reactviz.dto.TopicDTO;
import com.reactviz.model.Topic;
import com.reactviz.repository.TopicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TopicService {

    private final TopicRepository topicRepository;

    public List<TopicDTO> getTopics(String category) {
        List<Topic> topics = category == null || category.isBlank()
                ? topicRepository.findAll()
                : topicRepository.findByCategoryIgnoreCase(category);
        return topics.stream()
                .map(TopicDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public TopicDTO getTopic(Long id) {
        Topic topic = topicRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Topic not found"));
        return TopicDTO.fromEntity(topic);
    }
}

