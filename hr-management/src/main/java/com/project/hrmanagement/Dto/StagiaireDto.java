package com.project.hrmanagement.Dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class StagiaireDto {
    private String nom;
    private String prenom;
    private Long age;
    private String adresse;
    private String departement;
    private LocalDate dateDebut;
    private LocalDate dateFin;
}