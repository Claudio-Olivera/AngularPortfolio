import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { AccreditedStudiesService } from 'src/app/services/accredited-studies.service';


@Component({
  selector: 'app-accredited-studies',
  templateUrl: './accredited-studies.component.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000)),
    ]),
  ],
  styleUrls:['./accredited-studies.component.css']
})
export class AccreditedStudiesComponent {

  private accreditedStudiesService: AccreditedStudiesService = inject(AccreditedStudiesService);

  $dataEstudios = this.accreditedStudiesService.getDataEstudios();

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
