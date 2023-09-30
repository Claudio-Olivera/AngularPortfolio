import { Component, inject } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',

})
export class ProjectsComponent {


  private proyectosService: ProyectosService = inject(ProyectosService);

  $dataProyectos = this.proyectosService.getDataProyectos();

  onImageLoad(event: Event) {
    let target = event.target as HTMLImageElement;
    if (target instanceof HTMLImageElement && !target.classList.contains('loaded')) {
      target.classList.add('loaded');
      if (target.parentElement) {
        target.parentElement.classList.add('loaded');
      }
    }
  }

}
