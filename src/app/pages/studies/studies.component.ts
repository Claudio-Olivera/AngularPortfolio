import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Certifications } from 'src/app/Interfaces/Certifications';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
})
export class StudiesComponent {

  showCertificaciones = false;

  certificados:Certifications[] | undefined;

  constructor(private router: Router) {}

  toggleCertificaciones(){
    this.showCertificaciones = !this.showCertificaciones;
    if(this.router.url == "/estudios"){
      this.router.navigate(['/estudios/certificaciones']);
    }else{
      this.router.navigate(['/estudios'])
    }
  }

}
