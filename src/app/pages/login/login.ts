import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // <-- Résout l'erreur [formGroup]
    MatCardModule,       // <-- Résout l'erreur 'mat-card'
    MatFormFieldModule,  // <-- Résout l'erreur 'mat-form-field'
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html', // Pointe bien vers votre fichier login.html
  styleUrl: './login.scss'     // Pointe bien vers votre fichier login.scss
})
export class LoginComponent {
  // L'utilisation de inject() évite l'erreur "fb used before initialization"
  private fb = inject(FormBuilder);
  
  loginForm: FormGroup;

  constructor() {
    // On initialise le formulaire ici, après que fb soit injecté
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  login() {
    if (this.loginForm.valid) {
      console.log('Connexion réussie', this.loginForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}