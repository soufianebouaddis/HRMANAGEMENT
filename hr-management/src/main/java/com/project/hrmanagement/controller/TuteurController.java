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

import com.project.hrmanagement.entity.Tuteur;
import com.project.hrmanagement.service.TuteurService;

@RestController
@RequestMapping("/api/tuteur")
public class TuteurController {
    private TuteurService tuteurService;

    public TuteurController(TuteurService tuteurService) {
        this.tuteurService = tuteurService;
    }

    @PostMapping("add")
    public ResponseEntity<Tuteur> addTuteur(@RequestBody Tuteur t) {
        return ResponseEntity.ok().body(tuteurService.add(t));
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Optional<Tuteur>> updateTuteur(@PathVariable Long id, @RequestBody Tuteur t) {
        return ResponseEntity.ok().body(tuteurService.update(id, t));
    }

    @GetMapping("tuteurs")
    public ResponseEntity<List<Tuteur>> tuteurs() {
        return ResponseEntity.ok().body(tuteurService.fetchAll());
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteTuteur(@PathVariable Long id) {
        return ResponseEntity.ok().body(tuteurService.delete(id));
    }
}