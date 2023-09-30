import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  loading: boolean = false;

  signInForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder,
    private router: Router
  ) {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true;
      const email = this.signInForm.value.email as string;
      const password = this.signInForm.value.password as string;
      const token = await this.supabase.signIn(email, password);
      if (token) {
        // Redirigir a otro componente
        this.router.navigate(['/admin']);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.signInForm.reset();
      this.loading = false;
    }
  }

  async signOut() {
    this.supabase.signOut();
  }
}
