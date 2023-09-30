
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Certifications } from 'src/app/Interfaces/Certifications';

import { CertificationsService } from 'src/app/services/certifications.service';

import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/services/dialog-service.service';

@Component({
  selector: 'app-admin-certifications',
  templateUrl: './admin-certifications.component.html',
})
export class AdminCertificationsComponent {

  certificadoForm: FormGroup = new FormGroup({
    certificado: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required])
  });

  editingCertificadoForm: FormGroup = new FormGroup({
    certificado: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required])
  });

  private certificadosService: CertificationsService = inject(CertificationsService)
  $dataCertificados = this.certificadosService.getDataCertificados();

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
    private certificadoSubscription: Subscription | undefined;

  onToggleEditMode(id: number) {
    this.editingStates[id] = !this.editingStates[id];
    if (this.editingStates[id]) {
      this.certificadoSubscription = this.$dataCertificados.subscribe(certificados => {
        const certificado = certificados.find(c => c.id === id);
        if (certificado) {
          this.editingCertificadoForm.patchValue({
            certificado: certificado.certificado,
            imagen: certificado.imagen
          });
        }
      });
    } else if (this.certificadoSubscription) {
      this.certificadoSubscription.unsubscribe();
    }
  }


  postCertificado(data: Certifications): void {
    if (this.certificadoForm.valid) {
      this.certificadosService.postCertificado(data)
    }
  }

  patchCertificado(id: number, data: Certifications): void {
    console.log({id: id, data: data})
    if (!this.editingCertificadoForm.valid) {
      console.log('certificado no valido')
    }else {
      this.certificadosService.patchCertificado(id, data)
      console.log('certificado enviado')
    }
  }

  deleteCertificado(id: number): void {
    this.certificadosService.deleteCertificado(id)
  }

}
