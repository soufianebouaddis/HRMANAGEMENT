package com.project.hrmanagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.hrmanagement.Dto.DeleteMessage;
import com.project.hrmanagement.entity.Stagiaire;
import com.project.hrmanagement.service.StagiaireService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/stagiaire/")
public class StagiaireController {
    private StagiaireService stagiaireService;

    public StagiaireController(StagiaireService stagiaireService) {
        this.stagiaireService = stagiaireService;
    }

    @PostMapping("add")
    public ResponseEntity<Stagiaire> addStagiaire(@RequestBody Stagiaire s) {
        return ResponseEntity.ok().body(stagiaireService.add(s));
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Optional<Stagiaire>> updateStagiaire(@PathVariable Long id, @RequestBody Stagiaire s) {
        return ResponseEntity.ok().body(stagiaireService.update(id, s));
    }

    @GetMapping("stagiaires")
    public ResponseEntity<List<Stagiaire>> stagiaires() {
        return ResponseEntity.ok().body(stagiaireService.fetchAll());
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<DeleteMessage> deleteStagiaire(@PathVariable Long id) {
        return ResponseEntity.ok().body(stagiaireService.delete(id));
    }

    @PostMapping("affecttache/{idstagiaire}/{idtache}")
    public ResponseEntity<DeleteMessage> affectTache(@PathVariable Long idstagiaire, @PathVariable Long idtache) {
        return ResponseEntity.ok().body(stagiaireService.affectTache(idstagiaire, idtache));
    }

    @PostMapping("affectencadrant/{idstagiaire}/{idEnc}")
    public ResponseEntity<DeleteMessage> affectEncadrant(@PathVariable Long idstagiaire, @PathVariable Long idEnc) {
        return ResponseEntity.ok().body(stagiaireService.affectEncadrant(idstagiaire, idEnc));
    }

}