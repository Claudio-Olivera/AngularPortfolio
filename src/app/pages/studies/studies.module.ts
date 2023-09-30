import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudiesComponent } from './studies.component';
import { RouterModule } from '@angular/router';
import { SplitPipe } from 'src/app/pipes/split.pipe';
import { CertificationsModule } from '../certifications/certifications.module';
import { StudiesRoutingModule } from './studies-routing.module';
import { AccreditedStudiesComponent } from '../accredited-studies/accredited-studies.component';


@NgModule({
  declarations: [
    StudiesComponent,
    AccreditedStudiesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    /*ES NECESARIO EL SPLITPIPE AQUI?*/
    SplitPipe,

    StudiesRoutingModule,
    CertificationsModule,
  ],
  exports:[
    StudiesComponent,
    AccreditedStudiesComponent,
  ]
})
export class StudiesModule { }
