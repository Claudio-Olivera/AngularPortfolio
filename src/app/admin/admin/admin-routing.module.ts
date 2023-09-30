import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/admin/admin-certifications',
        pathMatch: 'full'
      },
      {
        path: 'admin-certifications',
        loadChildren: () => import('../admin-certifications/admin-certifications.module').then(m => m.AdminCertificationsModule)
      },
      {
        path:'admin-accredited-studies',
        loadChildren: () => import('../admin-accredited-studies/admin-accredited-studies.module').then(m => m.AdminAccreditedStudiesModule)
      },
      {
        path:'admin-projects',
        loadChildren: () => import('../admin-proyectos/admin-proyectos.module').then(m => m.AdminProyectosModule)
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
