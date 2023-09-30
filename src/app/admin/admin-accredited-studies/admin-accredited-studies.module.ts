import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAccreditedStudies } from './admin-accredited-studies.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AdminAccreditedStudies
  },
];

@NgModule({
  declarations: [AdminAccreditedStudies],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // otras importaciones
    ReactiveFormsModule,
    ComponentsModule

  ],
  exports:[AdminAccreditedStudies]

})

export class AdminAccreditedStudiesModule { }
