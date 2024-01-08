import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Encadrant } from '../../type/Encadrant';
import { EncadrantService } from '../../service/encadrant.service';
import { EncadrantListComponent } from "../encadrant-list/encadrant-list.component";

@Component({
    selector: 'app-encadrant',
    standalone: true,
    templateUrl: './encadrant.component.html',
    styleUrl: './encadrant.component.css',
    imports: [ReactiveFormsModule, EncadrantListComponent]
})
export class EncadrantComponent implements OnInit {
  
  employeeForm !: FormGroup;
  employees !: Encadrant[];
  constructor(private fb: FormBuilder,private encService:EncadrantService) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      departement: ['', Validators.required],
    });
    this.fetchEncadrants();
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData: Encadrant = this.employeeForm.value;
      this.encService.add(formData).subscribe({
        next: (response: Encadrant) => {
          console.log("Encadrant bien enregistre : " + response.nom );
          this.employees.push(response);
        },
        error: (err) => {
          console.log(err);
        }

      })
      console.log(formData);
    }
  }

  fetchEncadrants() {
    this.encService.fetchAll().subscribe({
      next : (response : Encadrant[]) => {
        this.employees = response;
      },
      error : (err) => {
        console.log(err);
      }
    })
  }
}
