package com.project.hrmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.hrmanagement.Dto.DeleteMessage;
import com.project.hrmanagement.entity.Encadrant;
import com.project.hrmanagement.entity.Stagiaire;
import com.project.hrmanagement.entity.TacheAssignee;
import com.project.hrmanagement.exception.CustomNotFoundException;
import com.project.hrmanagement.repository.EncadrantRepository;
import com.project.hrmanagement.repository.StagiaireRepository;
import com.project.hrmanagement.repository.TacheAssigneeRepository;

@Service
public class StagiaireService {

    private StagiaireRepository stagiaireRepository;
    private TacheAssigneeRepository assigneeRepository;
    private EncadrantRepository encadrantRepository;

    public StagiaireService(StagiaireRepository stagiaireRepository, TacheAssigneeRepository assigneeRepository,
            EncadrantRepository encadrantRepository) {
        this.stagiaireRepository = stagiaireRepository;
        this.assigneeRepository = assigneeRepository;
        this.encadrantRepository = encadrantRepository;
    }

    public Stagiaire add(Stagiaire o) {
        return stagiaireRepository.save(o);
    }

    public List<Stagiaire> fetchAll() {
        return stagiaireRepository.findAll();
    }

    public Optional<Stagiaire> update(Long id, Stagiaire o) {
        return stagiaireRepository.findById(id).map((stg) -> {
            stg.setNom(o.getNom());
            stg.setPrenom(o.getPrenom());
            stg.setAdresse(o.getAdresse());
            stg.setDateDebut(o.getDateDebut());
            stg.setDateFin(o.getDateFin());
            stg.setAge(o.getAge());
            stg.setDepartement(o.getDepartement());
            return stagiaireRepository.save(stg);
        });
    }

    public Stagiaire fetchOne(Long id) {
        return stagiaireRepository.findById(id)
                .orElseThrow(() -> new CustomNotFoundException("stagiaire non trouver id : " + id));
    }

    public DeleteMessage delete(Long id) {
        try {
            stagiaireRepository.deleteById(id);
            return new DeleteMessage("Stagiaire id : " + id + " Bien supprimer");
        } catch (Exception e) {
            return new DeleteMessage("Stagiaire non trouver id : " + id);
        }
    }

    public DeleteMessage affectTache(Long idStagiaire, Long idtache) {
        Stagiaire st = stagiaireRepository.findById(idStagiaire)
                .orElseThrow(() -> new CustomNotFoundException("Stagiaire non trouver avec id : " + idStagiaire));
        TacheAssignee ta = assigneeRepository.findById(idtache)
                .orElseThrow(() -> new CustomNotFoundException("Tache non trouver avec id : " + idtache));
        if (st != null && ta != null) {
            st.getTachesAssignees().add(ta);
            stagiaireRepository.save(st);
            return new DeleteMessage("Tache avec id : " + idtache + " bien affecte a stagiaire avec id "
                    +
                    idStagiaire);
        }
        return new DeleteMessage("Tache non affecter");
    }

    public DeleteMessage affectEncadrant(Long idStagiaire, Long idEnc) {
        Stagiaire st = stagiaireRepository.findById(idStagiaire)
                .orElseThrow(() -> new CustomNotFoundException("Stagiaire non trouver avec id : " + idStagiaire));
        Encadrant enc = encadrantRepository.findById(idEnc)
                .orElseThrow(() -> new CustomNotFoundException("Encadrant non trouver avec id : " + idEnc));
        if (st != null && enc != null) {
            enc.getStagiaires().add(st);
            encadrantRepository.save(enc);
            stagiaireRepository.save(st);
            return new DeleteMessage(
                    "Encadrant avec id : " + idEnc + " bien affecte a stagiaire avec id" + idStagiaire);
        }
        return new DeleteMessage("Encadrant non affecter");
    }
}