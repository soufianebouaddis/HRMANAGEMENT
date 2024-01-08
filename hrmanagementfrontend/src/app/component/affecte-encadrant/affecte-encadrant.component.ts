import { Stagiaire } from './../../type/Stagiaire';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StagiaireService } from '../../service/stagiaire.service';


@Component({
  selector: 'app-affecte-encadrant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './affecte-encadrant.component.html',
  styleUrl: './affecte-encadrant.component.css'
})
export class AffecteEncadrantComponent {
  @Input() encadrantid!: number | undefined;
  @Output() saveClicked = new EventEmitter<{ encadrantId: number, stagiaireId: number }>();
  @Output() cancelClicked = new EventEmitter<void>();
  selectedStagiaireId: number | undefined;
  stagiaires !: Stagiaire[];
  constructor(
    private stagiaireService: StagiaireService
  ) {
    this.fetchAllStagiaire()
  }
  fetchAllStagiaire() {
    this.stagiaireService.fetchAll().subscribe({
      next: (response: Stagiaire[]) => {
        this.stagiaires = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  onSave() {
    if (this.encadrantid && this.selectedStagiaireId) {
      this.saveClicked.emit({ encadrantId: this.encadrantid, stagiaireId: this.selectedStagiaireId });
    }
  }

  onCancel() {
    this.cancelClicked.emit();
  }
}


