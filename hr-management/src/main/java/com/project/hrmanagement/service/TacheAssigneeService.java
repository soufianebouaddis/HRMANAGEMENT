package com.project.hrmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.hrmanagement.Dto.DeleteMessage;
import com.project.hrmanagement.entity.TacheAssignee;
import com.project.hrmanagement.exception.CustomNotFoundException;
import com.project.hrmanagement.repository.TacheAssigneeRepository;

@Service
public class TacheAssigneeService {
    private TacheAssigneeRepository tacheAssigneeRepository;

    public TacheAssigneeService(TacheAssigneeRepository tacheAssigneeRepository) {
        this.tacheAssigneeRepository = tacheAssigneeRepository;
    }

    public TacheAssignee add(TacheAssignee o) {
        return tacheAssigneeRepository.save(o);
    }

    public Optional<TacheAssignee> update(Long id, TacheAssignee o) {
        return tacheAssigneeRepository.findById(id).map((ta) -> {
            ta.setStatut(o.getStatut());
            ta.setDescription(o.getDescription());
            ta.setDateLimite(o.getDateLimite());
            return tacheAssigneeRepository.save(ta);
        });
    }

    public List<TacheAssignee> fetchAll() {
        return tacheAssigneeRepository.findAll();
    }

    public TacheAssignee fetchOne(Long id) {
        return tacheAssigneeRepository.findById(id)
                .orElseThrow(() -> new CustomNotFoundException("Tache non trouver id : " + id));
    }

    public DeleteMessage delete(Long id) {
        try {
            tacheAssigneeRepository.deleteById(id);
            return new DeleteMessage("Tache id : " + id + " Bien supprimer");
        } catch (Exception e) {
            return new DeleteMessage("Tache avec " + id + " non trouver");
        }
    }
}