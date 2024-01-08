package com.project.hrmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hrmanagement.entity.Stagiaire;

@Repository
public interface StagiaireRepository extends JpaRepository<Stagiaire, Long> {

}