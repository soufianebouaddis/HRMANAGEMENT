import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TacheAssignee } from '../../type/TacheAssignee';
import { TacheService } from '../../service/tache.service';
import { TaskListComponent } from "../task-list/task-list.component";
import { MatDialog } from '@angular/material/dialog';
import { DeleteMessage } from '../../type/DeleteMessage';


@Component({
    selector: 'app-tache',
    standalone: true,
    templateUrl: './tache.component.html',
    styleUrl: './tache.component.css',
    imports: [ReactiveFormsModule, TaskListComponent]
})
export class TacheComponent implements OnInit {

  tacheForm!: FormGroup;
  tasks: TacheAssignee[] = [];
  constructor(private fb: FormBuilder, private tacheService: TacheService,private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.tacheForm = this.fb.group({
      description: ['', Validators.required],
      dateLimite: [null, Validators.required],
      statut: ['', Validators.required]
    });
    this.fetchAllTasks()
  }
  onSubmit(): void {
    if (this.tacheForm.valid) {
      const formData: TacheAssignee = this.tacheForm.value;
      this.tacheService.add(formData).subscribe({
        next: (response: TacheAssignee) => {
          console.log("Tache bien enregistre : " + response);
          this.tasks.push(response);
        },
        error: (err) => {
          console.log(err);
        }

      })
      console.log(formData);
    }
  }
  fetchAllTasks() {
    this.tacheService.fetchAll().subscribe({
      next: (response: TacheAssignee[]) => {
        this.tasks = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  deleteTask(id: number | undefined) {
    if (id === undefined) {
      console.error('Cannot delete task without a valid ID.');
      return;
    }
    if (confirm("Est-ce que vous voulez supprimer cette tâche ?")) {
      this.tacheService.delete(id).subscribe({
        next: (response: DeleteMessage) => {
          alert(response.message);
          this.fetchAllTasks();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
  
}
