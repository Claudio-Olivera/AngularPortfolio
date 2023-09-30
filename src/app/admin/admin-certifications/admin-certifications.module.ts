


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminCertificationsComponent } from './admin-certifications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';






const routes: Routes = [
  {
    path: '',
    component: AdminCertificationsComponent
  },

];

@NgModule({
  declarations: [AdminCertificationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // otras importaciones
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule


  ],
  exports:[
    AdminCertificationsComponent
  ]
})
export class AdminCertificationsModule { }
