import { Component } from '@angular/core';
import { 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  homeOutline,
  locationOutline,
  heartOutline,
  chatboxEllipsesOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ]
})
export class TabsPage {
  constructor() {
    addIcons({
      homeOutline,
      locationOutline,
      heartOutline,
      chatboxEllipsesOutline,
      personOutline
    });
  }
}
