package com.reactviz.service;

import com.reactviz.dto.QuizSubmissionDTO;
import com.reactviz.model.QuizQuestion;
import com.reactviz.repository.QuizRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    // Manual constructor instead of @RequiredArgsConstructor
    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<QuizQuestion> getRandomQuestionsByTopic(Long topicId, int limit) {
        List<QuizQuestion> all = quizRepository.findByTopicId(topicId);
        if (all.isEmpty()) {
            return Collections.emptyList();
        }
        Collections.shuffle(all);
        return all.stream().limit(limit).collect(Collectors.toList());
    }

    public Map<String, Object> gradeQuiz(QuizSubmissionDTO submission) {
        List<QuizQuestion> questions = quizRepository.findByTopicId(submission.getTopicId());
        Map<Long, Integer> answers = submission.getAnswers();

        int total = questions.size();
        int correct = 0;

        List<Map<String, Object>> details = new ArrayList<>();

        for (QuizQuestion q : questions) {
            Integer chosen = answers.get(q.getId());
            boolean isCorrect = chosen != null && chosen.equals(q.getCorrectAnswer());
            if (isCorrect) {
                correct++;
            }
            details.add(Map.<String, Object>of(
                    "questionId", q.getId(),
                    "correct", isCorrect,
                    "correctAnswer", q.getCorrectAnswer(),
                    "explanation", q.getExplanation()
            ));
        }

        int score = total == 0 ? 0 : (int) Math.round((correct * 100.0) / total);

        return Map.of(
                "total", total,
                "correct", correct,
                "score", score,
                "details", details
        );
    }
}