import { Component, Input } from '@angular/core';
import { Encadrant } from '../../type/Encadrant';
import { EncadrantService } from '../../service/encadrant.service';
import { DeleteMessage } from '../../type/DeleteMessage';
import { EncadrantEditDialogComponent } from '../encadrant-edit-dialog/encadrant-edit-dialog.component';
import { StagiaireService } from '../../service/stagiaire.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AffecteEncadrantComponent } from "../affecte-encadrant/affecte-encadrant.component";

@Component({
    selector: 'app-encadrant-list',
    standalone: true,
    templateUrl: './encadrant-list.component.html',
    styleUrl: './encadrant-list.component.css',
    imports: [EncadrantEditDialogComponent, FormsModule, CommonModule, AffecteEncadrantComponent]
})
export class EncadrantListComponent {
  @Input() empList !: Encadrant[];
  editedEncadrant !: Encadrant;
  isEditDialogVisible : boolean = false;
  isAffectDialogVisible: boolean = false;
  affectedEncadrantId: number | undefined;
  selectedStagiaireId !: number | undefined;
  constructor(private encService: EncadrantService, private stagiaireService: StagiaireService) { }
  deleteEncadrant(id: number | undefined) {
    if (id === undefined) {
      console.error('Cannot delete encadrant without a valid ID.');
      return;
    }
    console.log(id);
    if (confirm("Est-ce que vous voulez supprimer ce Encadrant ?")) {
      this.encService.delete(id).subscribe({
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
    this.encService.fetchAll().subscribe({
      next: (reponse: Encadrant[]) => {
        this.empList = reponse;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  saveEditedEncadrant(editedEnc: Encadrant) {
    this.updateEncadrant(editedEnc.id,editedEnc);
    console.log('Saved Edited Stagiaire:', editedEnc);
    this.isEditDialogVisible = false;
  }
  closeEditDialog() {
    this.isEditDialogVisible = false;
  }
  openEditDialog(enc: Encadrant): void {
    this.editedEncadrant = enc;
    this.isEditDialogVisible=true;
  }
  updateEncadrant(id: number | undefined, enc: Encadrant) {
    if (id === undefined) {
      return;
    }
    this.encService.update(id, enc).subscribe({
      next: (response: Encadrant) => {
        this.fetchAll();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  affectStagiaire(idStagaire: number | undefined, idEncadrant: number | undefined) {
    if (idStagaire === undefined) {
      return;
    }
    if (idEncadrant === undefined) {
      return;
    }
    this.stagiaireService.affectEncadrant(idStagaire, idEncadrant).subscribe({
      next: (response: DeleteMessage) => {
        console.log(response.message);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  openAffectDialog(idEncadrant: number | undefined): void {
    this.affectedEncadrantId = idEncadrant;
    this.selectedStagiaireId = -1;
    this.isAffectDialogVisible = true;
  }
  onAffectTask(event: { encadrantId: number, stagiaireId: number }) {
    console.log('Encadrant ID:', event.encadrantId);
    console.log('Stagiaire ID:', event.stagiaireId);
    this.affectStagiaire(event.stagiaireId,event.encadrantId);
    this.isAffectDialogVisible = false;
  }
  onCancelAffectTask() {
    this.isAffectDialogVisible = false;
  }
}
