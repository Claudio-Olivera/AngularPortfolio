import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProyectosComponent } from './admin-proyectos.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminProyectosComponent
  },
];


@NgModule({
  declarations: [
    AdminProyectosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports:[
    AdminProyectosComponent
  ]
})
export class AdminProyectosModule { }
