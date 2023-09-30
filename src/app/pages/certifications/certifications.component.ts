import { Component, inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CertificationsService } from 'src/app/services/certifications.service';


@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000)),
    ]),
  ],
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

  private certificadosService: CertificationsService = inject(CertificationsService);

  $dataCertificados = this.certificadosService.getDataCertificados();

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


