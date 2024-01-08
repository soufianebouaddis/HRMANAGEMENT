import { Stagiaire } from './../../type/Stagiaire';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StagiaireService } from '../../service/stagiaire.service';
import { DeleteMessage } from '../../type/DeleteMessage';
import { StagiaireEditDialogComponent } from '../stagiaire-edit-dialog/stagiaire-edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stagiaire-list',
  standalone: true,
  imports: [StagiaireEditDialogComponent,FormsModule,CommonModule],
  templateUrl: './stagiaire-list.component.html',
  styleUrl: './stagiaire-list.component.css'
})
export class StagiaireListComponent {
  @Input() stgList !: Stagiaire[];
  editedStagiaire !: Stagiaire;
  isEditDialogVisible: boolean = false;
  constructor(private stagiaireService: StagiaireService, private dialog: MatDialog) { }
  deleteStagiaire(id: number | undefined) {
    if (id === undefined) {
      console.error('Cannot delete encadrant without a valid ID.');
      return;
    }
    console.log(id);
    if (confirm("Est-ce que vous voulez supprimer ce Encadrant ?")) {
      this.stagiaireService.delete(id).subscribe({
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
    this.stagiaireService.fetchAll().subscribe({
      next: (reponse: Stagiaire[]) => {
        this.stgList = reponse;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  saveEditedStagiaire(editedStagiaire: Stagiaire) {
    this.updateStagiaire(editedStagiaire.id,editedStagiaire);
    console.log('Saved Edited Stagiaire:', editedStagiaire);

    // Close the dialog
    this.isEditDialogVisible = false;
  }
  openEditDialog(stg: Stagiaire): void {
    this.editedStagiaire = stg;
    this.isEditDialogVisible=true;
  }
  closeEditDialog() {
    this.isEditDialogVisible = false;
  }
  updateStagiaire(id: number | undefined, enc: Stagiaire) {
    if (id === undefined) {
      return;
    }
    this.stagiaireService.update(id, enc).subscribe({
      next: (response: Stagiaire) => {
        this.fetchAll();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
