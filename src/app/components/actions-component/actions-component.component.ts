import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AccreditedStudies } from 'src/app/Interfaces/AccreditedStudies';
import { Certifications } from 'src/app/Interfaces/Certifications';

@Component({
  selector: 'app-actions',
  templateUrl: './actions-component.component.html',
})
export class ActionsComponent {
  @Input()
  item!: Certifications | AccreditedStudies;
  @Input()
  isEditing!: boolean;
  @Output() delete = new EventEmitter<void>();
  @Output() toggleEdit = new EventEmitter<void>();
  @Output() save = new EventEmitter<Certifications | AccreditedStudies>();

  onDelete() {
    this.delete.emit();
  }

  onToggleEdit() {
    this.toggleEdit.emit();
  }

  onSave(item: Certifications | AccreditedStudies) {
    this.save.emit(item);
  }
}
