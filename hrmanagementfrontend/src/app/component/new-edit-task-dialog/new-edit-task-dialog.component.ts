import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TacheAssignee } from '../../type/TacheAssignee';

@Component({
  selector: 'app-new-edit-task-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-edit-task-dialog.component.html',
  styleUrl: './new-edit-task-dialog.component.css'
})
export class NewEditTaskDialogComponent {
  @Input() tache !: TacheAssignee;
  @Output() saveClicked = new EventEmitter<TacheAssignee>();
  @Output() cancelClicked = new EventEmitter<void>();

  onSave() {
    this.saveClicked.emit(this.tache);
  }

  onCancel() {
    this.cancelClicked.emit();
  }
}

