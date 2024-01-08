import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TacheAssignee } from '../../type/TacheAssignee';
import { TacheService } from '../../service/tache.service';
import { DeleteMessage } from '../../type/DeleteMessage';
import { AffecteTacheComponent } from '../affecte-tache/affecte-tache.component';
import { StagiaireService } from '../../service/stagiaire.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewEditTaskDialogComponent } from '../new-edit-task-dialog/new-edit-task-dialog.component';


@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [CommonModule, FormsModule, NewEditTaskDialogComponent, AffecteTacheComponent]
})
export class TaskListComponent {
  @Input() taskList !: TacheAssignee[];
  editedTask !: TacheAssignee;
  isEditDialogVisible: boolean = false;
  isAffectDialogVisible: boolean = false;
  affectedTaskId: number | undefined;
  selectedStagiaireId !: number | undefined;
  constructor(private tacheService: TacheService,private stagiaireService : StagiaireService) { }
 
  deleteTask(id: number | undefined) {
    if (id === undefined) {
      console.error('Cannot delete task without a valid ID.');
      return;
    }
    if (confirm("Est-ce que vous voulez supprimer cette tâche ?")) {
      this.tacheService.delete(id).subscribe({
        next: (response: DeleteMessage) => {
          alert(response.message);
          this.fetchAll();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
  fetchAll() {
    this.tacheService.fetchAll().subscribe({
      next: (reponse: TacheAssignee[]) => {
        this.taskList = reponse;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  updateTask(id : number | undefined , task : TacheAssignee) {
      if(id === undefined){
        return;
      }
      this.tacheService.update(id,task).subscribe({
        next: (response:TacheAssignee) => {
          this.fetchAll();
        },
        error : (err)=>{
          console.log(err);
        }
      })
  }
  affectStagiaire(idStagaire: number | undefined, idTache: number | undefined) {
    if (idStagaire === undefined) {
      return;
    }
    if (idTache === undefined) {
      return;
    }

    this.stagiaireService.affectTache(idStagaire, idTache).subscribe({
      next: (response: DeleteMessage) => {
        console.log(response.message);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  openNewEditDialog(newTask: TacheAssignee) {
    this.editedTask = newTask;
    this.isEditDialogVisible = true;
  }

  closeNewEditDialog() {
    this.isEditDialogVisible = false;
  }

  saveNewEditedTask() {
    this.updateTask(this.editedTask.id,this.editedTask);
    this.closeNewEditDialog();
  }
  openEditDialog(task: TacheAssignee) {
    this.editedTask = task;
    this.isEditDialogVisible = true;
  }
  openAffectDialog(taskId: number | undefined) {
    this.affectedTaskId = taskId;
    this.selectedStagiaireId = -1; // Reset selected stagiaire when opening the dialog
    this.isAffectDialogVisible = true;
  }

  onAffectTask(event: { taskId: number, stagiaireId: number }) {
    // Handle the saveClicked event here, use event.taskId and event.stagiaireId as needed
    console.log('Task ID:', event.taskId);
    console.log('Stagiaire ID:', event.stagiaireId);
    this.affectStagiaire(event.stagiaireId,event.taskId);
    this.isAffectDialogVisible = false;
  }

  onCancelAffectTask() {
    // Implement your logic to handle the cancel action
    this.isAffectDialogVisible = false;
  }
} 
