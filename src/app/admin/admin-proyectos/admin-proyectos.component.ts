import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Projects } from 'src/app/Interfaces/IProjects';
import { DialogService } from 'src/app/services/dialog-service.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-admin-proyectos',
  templateUrl: './admin-proyectos.component.html',
  styleUrls: ['./admin-proyectos.component.css']
})
export class AdminProyectosComponent {
  proyectoForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
  });

  editingProyectoForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
  });

  private proyectosService: ProyectosService = inject(ProyectosService)
  $dataProyectos = this.proyectosService.getDataProyectos();

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
    private proyectoSubscription: Subscription | undefined;

  onToggleEditMode(id: number) {
    this.editingStates[id] = !this.editingStates[id];
    if (this.editingStates[id]) {
      this.proyectoSubscription = this.$dataProyectos.subscribe(proyectos => {
        const proyecto = proyectos.find(p => p.id === id);
        if (proyecto) {
          this.editingProyectoForm.patchValue({
            nombre: proyecto.nombre,
            descripcion: proyecto.descripcion,
            imagen: proyecto.imagen,
            link: proyecto.link,
          });
        }
      });
    } else if (this.proyectoSubscription) {
      this.proyectoSubscription.unsubscribe();
    }
  }


  postProyecto(data: Projects): void {
    if (this.proyectoForm.valid) {
      this.proyectosService.postProyecto(data)
    }
  }

  patchProyecto(id: number, data: Projects): void {
    console.log({id: id, data: data})
    if (!this.editingProyectoForm.valid) {
      console.log('proyecto no valido')
    }else {
      this.proyectosService.patchProyecto(id, data)
      console.log('proyecto enviado')
    }
  }

  deleteProyecto(id: number): void {
    this.proyectosService.deleteProyecto(id)
  }

}
