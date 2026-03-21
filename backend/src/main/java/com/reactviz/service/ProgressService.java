package com.reactviz.service;

import com.reactviz.model.Progress;
import com.reactviz.repository.ProgressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProgressService {

    private final ProgressRepository progressRepository;

    public List<Progress> getProgressForUser(Long userId) {
        return progressRepository.findByUserId(userId);
    }

    public Progress updateProgress(Long userId, Long topicId, Integer score, boolean completed) {
        Progress existing = progressRepository.findByUserIdAndTopicId(userId, topicId);
        if (existing == null) {
            existing = Progress.builder()
                    .userId(userId)
                    .topicId(topicId)
                    .build();
        }
        existing.setScore(score);
        existing.setCompleted(completed);
        existing.setLastAttempt(Instant.now());
        return progressRepository.save(existing);
    }
}

