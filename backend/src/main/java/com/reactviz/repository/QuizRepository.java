package com.reactviz.repository;

import com.reactviz.model.QuizQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<QuizQuestion, Long> {

    List<QuizQuestion> findByTopicId(Long topicId);
}

