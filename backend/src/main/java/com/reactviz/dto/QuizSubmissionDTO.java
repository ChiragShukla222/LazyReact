package com.reactviz.dto;

import java.util.Map;

public class QuizSubmissionDTO {

    private Long topicId;
    private Map<Long, Integer> answers;

    public QuizSubmissionDTO() {}

    public QuizSubmissionDTO(Long topicId, Map<Long, Integer> answers) {
        this.topicId = topicId;
        this.answers = answers;
    }

    public Long getTopicId() {
        return topicId;
    }

    public void setTopicId(Long topicId) {
        this.topicId = topicId;
    }

    public Map<Long, Integer> getAnswers() {
        return answers;
    }

    public void setAnswers(Map<Long, Integer> answers) {
        this.answers = answers;
    }
}