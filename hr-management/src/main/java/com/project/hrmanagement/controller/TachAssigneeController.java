package com.project.hrmanagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.hrmanagement.Dto.DeleteMessage;
import com.project.hrmanagement.entity.TacheAssignee;
import com.project.hrmanagement.service.TacheAssigneeService;

@RestController
@RequestMapping("/api/tache/")
public class TachAssigneeController {

    private TacheAssigneeService tacheAssigneeService;

    public TachAssigneeController(TacheAssigneeService tacheAssigneeService) {
        this.tacheAssigneeService = tacheAssigneeService;
    }

    @PostMapping("add")
    public ResponseEntity<TacheAssignee> addTache(@RequestBody TacheAssignee t) {
        return ResponseEntity.ok().body(tacheAssigneeService.add(t));
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Optional<TacheAssignee>> updatetache(@PathVariable Long id, @RequestBody TacheAssignee t) {
        return ResponseEntity.ok().body(tacheAssigneeService.update(id, t));
    }

    @GetMapping("taches")
    public ResponseEntity<List<TacheAssignee>> taches() {
        return ResponseEntity.ok().body(tacheAssigneeService.fetchAll());
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<DeleteMessage> deletetache(@PathVariable Long id) {
        return ResponseEntity.ok().body(tacheAssigneeService.delete(id));
    }
}