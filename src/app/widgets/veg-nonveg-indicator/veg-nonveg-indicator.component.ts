import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-veg-nonveg-indicator',
  templateUrl: './veg-nonveg-indicator.component.html',
  styleUrls: ['./veg-nonveg-indicator.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class VegNonvegIndicatorComponent  implements OnInit {

  @Input() type: string = 'veg';

  constructor() { }

  ngOnInit() {}

}
