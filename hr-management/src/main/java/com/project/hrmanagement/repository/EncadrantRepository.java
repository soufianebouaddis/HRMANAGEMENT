package com.project.hrmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hrmanagement.entity.Encadrant;

@Repository
public interface EncadrantRepository extends JpaRepository<Encadrant, Long> {

}