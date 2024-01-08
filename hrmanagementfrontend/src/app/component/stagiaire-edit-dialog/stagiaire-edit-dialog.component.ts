import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stagiaire } from '../../type/Stagiaire';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stagiaire-edit-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stagiaire-edit-dialog.component.html',
  styleUrl: './stagiaire-edit-dialog.component.css'
})
export class StagiaireEditDialogComponent {
  @Input() stagiaire !: Stagiaire;
  @Output() saveClicked = new EventEmitter<Stagiaire>();
  @Output() cancelClicked = new EventEmitter<void>();

  onSave() {
    this.saveClicked.emit(this.stagiaire);
  }

  onCancel() {
    this.cancelClicked.emit();
  }


}
