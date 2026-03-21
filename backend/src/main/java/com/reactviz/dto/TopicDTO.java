package com.reactviz.dto;

import com.reactviz.model.Topic;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class TopicDTO {
    Long id;
    String name;
    String category;
    String description;
    String difficulty;
    String vizType;

    public static TopicDTO fromEntity(Topic topic) {
        return TopicDTO.builder()
                .id(topic.getId())
                .name(topic.getName())
                .category(topic.getCategory())
                .description(topic.getDescription())
                .difficulty(topic.getDifficulty())
                .vizType(topic.getVizType())
                .build();
    }
}

