package com.reactviz.controller;

import com.reactviz.model.Progress;
import com.reactviz.service.ProgressService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/progress")
@RequiredArgsConstructor
public class ProgressController {

    private final ProgressService progressService;

    @GetMapping
    public List<Progress> getProgress(HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return progressService.getProgressForUser(userId);
    }

    @PostMapping
    public Progress updateProgress(@RequestBody Map<String, Object> body,
                                   HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        Long topicId = ((Number) body.get("topicId")).longValue();
        Integer score = body.get("score") == null ? null : ((Number) body.get("score")).intValue();
        boolean completed = body.get("completed") != null && (Boolean) body.get("completed");
        return progressService.updateProgress(userId, topicId, score, completed);
    }
}

