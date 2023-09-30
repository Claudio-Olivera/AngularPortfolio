import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Certifications } from 'src/app/Interfaces/Certifications';
import { AccreditedStudies } from 'src/app/Interfaces/AccreditedStudies';
import { Projects } from 'src/app/Interfaces/IProjects';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input()
  item: Certifications | AccreditedStudies | Projects={
    id: 0,
    nombre: '',
    descripcion: '',
    certificado: '',
    estudio: '',
    imagen: '',
    link: '',
    user_id: ''
  }; // unión de tipos
  @Input() formGroup!: FormGroup;
  @Input() showButtons = false;
  @Output() save = new EventEmitter<Certifications | AccreditedStudies | Projects >();
  @Output() close = new EventEmitter<void>();
  isCertification(): boolean {
    return (this.item as Certifications).certificado !== undefined;
  }

  isAccreditedStudy(): boolean {
    return (this.item as AccreditedStudies).estudio !== undefined;
  }

  isProject(): boolean {
    return (this.item as Projects).nombre !== undefined;
  }

  onSave() {
    if (this.isCertification()) {
      this.save.emit(this.formGroup.value as Certifications);
    } else if (this.isAccreditedStudy()) {
      this.save.emit(this.formGroup.value as AccreditedStudies);
    } else if (this.isProject()) {
      this.save.emit(this.formGroup.value as Projects);
    }
  }
  onClose() {
    this.close.emit();
  }

}
