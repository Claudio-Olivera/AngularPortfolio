import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationsComponent } from './certifications.component';

import { SplitPipe } from "../../pipes/split.pipe";
import { ComponentsModule } from 'src/app/components/components.module';






@NgModule({
  declarations: [
    CertificationsComponent,
  ],
  imports: [
    CommonModule,
    SplitPipe,
    ComponentsModule


  ],
  exports:[
    CertificationsComponent
  ]
})
export class CertificationsModule { }
