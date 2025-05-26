import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGoogle, logoApple, logoFacebook } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon
  ]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    addIcons({ logoGoogle, logoApple, logoFacebook });
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Form is initialized in constructor
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      // Here you would typically call your authentication service
      console.log('Form submitted:', this.loginForm.value);
      await this.showToast('Login successful!');
      this.router.navigate(['/tabs/home']);
    }
  }

  async loginWithGoogle(): Promise<void> {
    // Implement Google login
    await this.showToast('Google login coming soon!');
  }

  async loginWithApple(): Promise<void> {
    // Implement Apple login
    await this.showToast('Apple login coming soon!');
  }

  async loginWithFacebook(): Promise<void> {
    // Implement Facebook login
    await this.showToast('Facebook login coming soon!');
  }

  private async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();
  }
}
