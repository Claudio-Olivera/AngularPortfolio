import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccreditedStudies } from 'src/app/Interfaces/AccreditedStudies';
import { AccreditedStudiesService } from 'src/app/services/accredited-studies.service';
import { DialogService } from 'src/app/services/dialog-service.service';

@Component({
  selector: 'app-admin-accredited-studies',
  templateUrl: './admin-accredited-studies.component.html',
})
export class AdminAccreditedStudies  {

  estudioForm: FormGroup = new FormGroup({
    estudio: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required])
  });

  editingEstudioForm: FormGroup = new FormGroup({
    estudio: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required])
  });

  private accreditedStudiesService: AccreditedStudiesService = inject(AccreditedStudiesService)
  $dataEstudios = this.accreditedStudiesService.getDataEstudios();

  dialogService = inject(DialogService);
  isOpen = this.dialogService.dialogSignal;
  botonPresionado:boolean = false;

  openDialog() {
    this.dialogService.dialogSignal.set(true);
    this.botonPresionado = true;
  }

  closeDialog() {
    this.dialogService.dialogSignal.set(false);
    this.botonPresionado = false;
  }

    editingStates: { [id: number]: boolean } = {};
    private estudioSubscription: Subscription | undefined;

  onToggleEditMode(id: number) {
    this.editingStates[id] = !this.editingStates[id];
    if (this.editingStates[id]) {
      this.estudioSubscription = this.$dataEstudios.subscribe(estudios => {
        const estudio = estudios.find(e => e.id === id);
        if (estudio) {
          this.editingEstudioForm.patchValue({
            estudio: estudio.estudio,
            imagen: estudio.imagen
          });
        }
      });
    } else if (this.estudioSubscription) {
      this.estudioSubscription.unsubscribe();
    }
  }


  postEstudio(data: AccreditedStudies): void {
    if (this.estudioForm.valid) {
      this.accreditedStudiesService.postEstudio(data)
    }
  }

  patchEstudio(id: number, data: AccreditedStudies): void {
    console.log({id: id, data: data})
    if (!this.editingEstudioForm.valid) {
      console.log('certificado no valido')
    }else {
      this.accreditedStudiesService.patchEstudio(id, data)
      console.log('certificado enviado')
    }
  }

  deleteEstudio(id: number): void {
    this.accreditedStudiesService.deleteEstudio(id)
  }

}
