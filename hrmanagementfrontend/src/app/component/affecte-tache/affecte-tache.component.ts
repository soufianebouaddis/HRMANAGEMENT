import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StagiaireService } from '../../service/stagiaire.service';
import { Stagiaire } from '../../type/Stagiaire';

@Component({
  selector: 'app-affecte-tache',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './affecte-tache.component.html',
  styleUrl: './affecte-tache.component.css'
})
export class AffecteTacheComponent {
  @Input() taskid!: number | undefined;
  @Output() saveClicked = new EventEmitter<{ taskId: number, stagiaireId: number }>();
  @Output() cancelClicked = new EventEmitter<void>();
  selectedStagiaireId: number | undefined;
  
  onSave() {
    if (this.taskid && this.selectedStagiaireId) {
      // Emit an object containing both taskid and selectedStagiaireId
      this.saveClicked.emit({ taskId: this.taskid, stagiaireId: this.selectedStagiaireId });
    }
  }

  onCancel() {
    this.cancelClicked.emit();
  }
  stagiaires !: Stagiaire[];
  constructor(
    private stagiaireService : StagiaireService
  ) {
    this.fetchAllStagiaire();
  }
  fetchAllStagiaire(){
    this.stagiaireService.fetchAll().subscribe({
      next:(response : Stagiaire[]) => {
        this.stagiaires = response;
      },
      error : (err)=> {
        console.log(err);
      }
    })
  }
}
