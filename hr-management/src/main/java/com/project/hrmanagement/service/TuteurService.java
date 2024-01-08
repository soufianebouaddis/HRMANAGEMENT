package com.project.hrmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.hrmanagement.entity.Tuteur;
import com.project.hrmanagement.exception.CustomNotFoundException;
import com.project.hrmanagement.repository.TuteurRepository;

@Service
public class TuteurService {
    private TuteurRepository tuteurRepository;

    public TuteurService(TuteurRepository tuteurRepository) {
        this.tuteurRepository = tuteurRepository;
    }

    public Tuteur add(Tuteur o) {
        return tuteurRepository.save(o);
    }

    public Optional<Tuteur> update(Long id, Tuteur o) {
        return tuteurRepository.findById(id).map((t) -> {
            t.setNom(o.getNom());
            t.setPrenom(o.getPrenom());
            return tuteurRepository.save(t);
        });
    }

    public List<Tuteur> fetchAll() {
        return tuteurRepository.findAll();
    }

    public Tuteur fetchOne(Long id) {
        return tuteurRepository.findById(id)
                .orElseThrow(() -> new CustomNotFoundException("Tuteur non trouver avec id : " + id));
    }

    public String delete(Long id) {
        try {
            return "Tuteur avec id " + id + " Bien supprimer";
        } catch (Exception e) {
            return "Tuteur avec id " + id + " Non trouver";
        }
    }
}