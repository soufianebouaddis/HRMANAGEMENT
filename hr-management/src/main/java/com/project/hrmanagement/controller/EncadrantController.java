package com.project.hrmanagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.hrmanagement.Dto.DeleteMessage;
import com.project.hrmanagement.entity.Encadrant;
import com.project.hrmanagement.service.EncadrantService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/encadrant/")
public class EncadrantController {
    private EncadrantService encadrantService;

    public EncadrantController(EncadrantService encadrantService) {
        this.encadrantService = encadrantService;
    }

    @PostMapping("add")
    public ResponseEntity<Encadrant> addEncadrant(@RequestBody Encadrant encadrantDto) {
        return ResponseEntity.ok().body(encadrantService.add(encadrantDto));
    }

    @GetMapping("fetchall")
    public ResponseEntity<List<Encadrant>> encadrants() {
        return ResponseEntity.ok().body(encadrantService.fetchAll());
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Optional<Encadrant>> updateEncadrant(@PathVariable Long id, @RequestBody Encadrant entity) {
        return ResponseEntity.ok().body(encadrantService.update(id, entity));
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<DeleteMessage> deleteEncadrant(@PathVariable Long id) {
        return ResponseEntity.ok().body(encadrantService.delete(id));
    }

}