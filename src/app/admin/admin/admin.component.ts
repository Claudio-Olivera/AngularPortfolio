import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles:[`
  html, body { height: 100%; }
  body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
  `]
})
export class AdminComponent implements OnInit {
  constructor(private readonly supabase:SupabaseService,private router: Router){}


  collapseShow = "hidden";


  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

  async signOut() {
    await this.supabase.signOut();
    console.info("sesion cerrada")
    this.router.navigate(['/acerca']);
  }
}
