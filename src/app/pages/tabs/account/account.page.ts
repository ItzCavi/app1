import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonList,
  IonAvatar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  personOutline,
  lockClosedOutline,
  chevronForwardOutline,
  documentTextOutline,
  shieldCheckmarkOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
    IonList,
    IonAvatar
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountPage implements OnInit {
  isLoggedIn = true; // Set to true for testing

  constructor(private router: Router) {
    addIcons({
      personOutline,
      lockClosedOutline,
      chevronForwardOutline,
      documentTextOutline,
      shieldCheckmarkOutline
    });
  }

  ngOnInit() {
    // For testing purposes, we'll keep the user logged in
    this.isLoggedIn = true;
  }

  goToTerms() {
    this.router.navigate(['/tabs/terms']);
  }

  goToPolicy() {
    this.router.navigate(['/tabs/policy']);
  }

  goToLogin() {
    this.router.navigate(['/tabs/login']);
  }
}
