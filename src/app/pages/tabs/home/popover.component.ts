import { Component } from '@angular/core';
import { PopoverController, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="selectLocation('Europe')">
        <ion-label>Europe</ion-label>
      </ion-item>
      <ion-item button (click)="selectLocation('America')">
        <ion-label>America</ion-label>
      </ion-item>
      <ion-item button (click)="selectLocation('Asia')">
        <ion-label>Asia</ion-label>
      </ion-item>
    </ion-list>
  `,
  styleUrls: ['./popover.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel]
})
export class PopoverComponent {
  constructor(private popoverCtrl: PopoverController) {}

  selectLocation(location: string) {
    this.popoverCtrl.dismiss(location, 'selected');
  }
}
