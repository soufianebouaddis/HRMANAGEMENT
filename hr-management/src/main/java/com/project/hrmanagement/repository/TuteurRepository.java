package com.project.hrmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hrmanagement.entity.Tuteur;

@Repository
public interface TuteurRepository extends JpaRepository<Tuteur, Long> {

}