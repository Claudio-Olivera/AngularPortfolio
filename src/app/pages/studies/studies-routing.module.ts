import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiesComponent } from './studies.component';
import { CertificationsComponent } from '../certifications/certifications.component';


const routes: Routes = [
  { path: '', component: StudiesComponent,
    children:[{
      path:'certificaciones',
      component:CertificationsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesRoutingModule { }
