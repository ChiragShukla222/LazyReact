package com.reactviz.repository;

import com.reactviz.model.Progress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProgressRepository extends JpaRepository<Progress, Long> {

    List<Progress> findByUserId(Long userId);

    Progress findByUserIdAndTopicId(Long userId, Long topicId);
}

