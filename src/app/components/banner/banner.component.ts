import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IonRow, IonicSlides } from '@ionic/angular/standalone';
import { Banner } from 'src/app/interfaces/banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [IonRow],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent  implements OnInit {

  swiperModules = [IonicSlides];
  @Input() bannerImages: Banner[] = [];

  constructor() { }

  ngOnInit() {}

}
