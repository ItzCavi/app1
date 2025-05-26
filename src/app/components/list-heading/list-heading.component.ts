import { Component, Input, OnInit } from '@angular/core';
import { IonItemDivider, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-heading',
  templateUrl: './list-heading.component.html',
  styleUrls: ['./list-heading.component.scss'],
  standalone: true,
  imports: [IonItemDivider, IonButton]
})
export class ListHeadingComponent  implements OnInit {

  @Input() heading!: () => string;
  @Input() buttonTitle!: () => string;

  constructor() { }

  ngOnInit() {}

}
