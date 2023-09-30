import { AdminCertificationsModule } from './admin/admin-certifications/admin-certifications.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

import { ProjectsComponent } from './pages/projects/projects.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './layouts/page404/page404.component';
import { AdminModule } from './admin/admin/admin.module';



const routes: Routes = [
  { path: 'acerca',
    component: AboutComponent
  },
  { path: 'estudios',
    loadChildren: () => import('./pages/studies/studies.module').then( m => m.StudiesModule )
  },
  { path: 'proyectos',
    component: ProjectsComponent
  },
  { path: 'auth',
    component: AuthComponent
  },
  { path: 'admin',
    component:AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin/admin.module').then( m => m.AdminModule ),
  },
  { path:'404',
    component:Page404Component
  },
  { path: '',
    redirectTo: '/acerca',
    pathMatch: 'full'
  },
  { path:'**',
    redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


