import { CommonModule } from '@angular/common';
import { Encadrant } from './../../type/Encadrant';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-encadrant-edit-dialog',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './encadrant-edit-dialog.component.html',
  styleUrl: './encadrant-edit-dialog.component.css'
})
export class EncadrantEditDialogComponent {
  @Input() encadrant !: Encadrant;
  @Output() saveClicked = new EventEmitter<Encadrant>();
  @Output() cancelClicked = new EventEmitter<void>();

  onSave() {
    this.saveClicked.emit(this.encadrant);
  }

  onCancel() {
    this.cancelClicked.emit();
  }

}
