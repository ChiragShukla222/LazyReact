package com.reactviz.controller;

import com.reactviz.dto.QuizSubmissionDTO;
import com.reactviz.model.QuizQuestion;
import com.reactviz.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @GetMapping
    public List<QuizQuestion> getQuiz(@RequestParam("topicId") Long topicId,
                                      @RequestParam(value = "limit", defaultValue = "5") int limit) {
        return quizService.getRandomQuestionsByTopic(topicId, limit);
    }

    @PostMapping("/submit")
    public Map<String, Object> submit(@RequestBody QuizSubmissionDTO submission) {
        return quizService.gradeQuiz(submission);
    }
}

