package com.reactviz.repository;

import com.reactviz.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TopicRepository extends JpaRepository<Topic, Long> {

    List<Topic> findByCategoryIgnoreCase(String category);
}

