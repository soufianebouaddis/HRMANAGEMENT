package com.project.hrmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hrmanagement.entity.TacheAssignee;

@Repository
public interface TacheAssigneeRepository extends JpaRepository<TacheAssignee, Long> {

}