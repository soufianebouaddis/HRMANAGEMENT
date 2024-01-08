import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StagiaireService } from '../../service/stagiaire.service';
import { Stagiaire } from '../../type/Stagiaire';
import { StagiaireListComponent } from "../stagiaire-list/stagiaire-list.component";

@Component({
    selector: 'app-stagiaire',
    standalone: true,
    templateUrl: './stagiaire.component.html',
    styleUrl: './stagiaire.component.css',
    imports: [ReactiveFormsModule, StagiaireListComponent]
})
export class StagiaireComponent {
  stagiaireForm !: FormGroup;
  stagiaireList !: Stagiaire[];
  constructor(private fb: FormBuilder,private stagiaireService : StagiaireService ) {}

  ngOnInit(): void {
    this.stagiaireForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(50)]],
      prenom: ['', [Validators.required, Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      adresse: ['', [Validators.required, Validators.maxLength(100)]],
      departement: ['', [Validators.required, Validators.maxLength(50)]],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]]
    });
    this.fetchStagiaire();
  }

  onSubmit(): void {
    if (this.stagiaireForm.valid) {
      const formData : Stagiaire = this.stagiaireForm.value;
      this.stagiaireService.add(formData).subscribe({
        next:(response : Stagiaire)=>{
          this.stagiaireList.push(response);
        }
      });
      console.log('Form submitted:', formData.nom);
    } else {
      this.stagiaireForm.markAllAsTouched();
    }
  }
  fetchStagiaire() {
    this.stagiaireService.fetchAll().subscribe({
      next: (response : Stagiaire[]) => {
        console.log(response)
        this.stagiaireList = response;
      },
      error : (err)=> {
        console.log(err);
      }
    })
  }
}
