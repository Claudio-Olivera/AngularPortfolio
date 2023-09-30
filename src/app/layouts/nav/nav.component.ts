import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {


  constructor(private router:Router) {}

  get currentUrl() {
    return this.router.url;
  }

}
