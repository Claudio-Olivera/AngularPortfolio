import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-social-nav',
  templateUrl: './social-nav.component.html',
})
export class SocialNavComponent {

  constructor(private router:Router) {}

  get isAcercaRoute() {
    return this.router.url;
  }


}
