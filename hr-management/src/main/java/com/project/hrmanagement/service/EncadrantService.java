package com.project.hrmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.hrmanagement.Dto.DeleteMessage;
import com.project.hrmanagement.entity.Encadrant;
import com.project.hrmanagement.exception.CustomNotFoundException;
import com.project.hrmanagement.repository.EncadrantRepository;

@Service
public class EncadrantService {
    private final EncadrantRepository encadrantRepository;

    public EncadrantService(EncadrantRepository encadrantRepository) {
        this.encadrantRepository = encadrantRepository;
    }

    public Encadrant add(Encadrant o) {
        return encadrantRepository.save(o);
    }

    public List<Encadrant> fetchAll() {
        return encadrantRepository.findAll();
    }

    public Optional<Encadrant> update(Long id, Encadrant o) {
        return encadrantRepository.findById(id).map((enc) -> {
            enc.setNom(o.getNom());
            enc.setPrenom(o.getPrenom());
            enc.setDepartement(o.getDepartement());
            return encadrantRepository.save(enc);
        });
    }

    public Encadrant fetchOne(Long id) {
        return encadrantRepository.findById(id)
                .orElseThrow(() -> new CustomNotFoundException("Task not found with ID: " + id));
    }

    public DeleteMessage delete(Long id) {
        try {
            encadrantRepository.deleteById(id);
            return new DeleteMessage("Encadrant id : " + id + " bien supprimer");
        } catch (CustomNotFoundException e) {
            return new DeleteMessage("Error : " + e);
        }
    }

}