import { Component, Input } from '@angular/core';
import { IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-image-circle',
  templateUrl: './image-circle.component.html',
  styleUrls: ['./image-circle.component.scss'],
  standalone: true,
  imports: [IonAvatar]
})
export class ImageCircleComponent {

  @Input() image: string = '';

  constructor() { }

}
