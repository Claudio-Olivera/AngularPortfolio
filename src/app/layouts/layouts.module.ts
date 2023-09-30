import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SocialNavComponent } from './social-nav/social-nav.component';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SocialNavComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    NavComponent,
    FooterComponent,
    SocialNavComponent,
    Page404Component
  ]
})
export class LayoutsModule { }
