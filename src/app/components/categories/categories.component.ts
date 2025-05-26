import { Category } from 'src/app/interfaces/category.interface';
import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonCol } from '@ionic/angular/standalone';
import { CommonModule, NgIf, NgForOf } from '@angular/common';
import { ImageCircleComponent } from 'src/app/widgets/image-circle/image-circle.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: true,
  imports: [IonCol, ImageCircleComponent, CommonModule, NgIf, NgForOf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesComponent implements OnInit {

  @Input() categories: Category[] = [];
  swiperModules: any[] = []; // Empty array to avoid errors

  constructor() { }

  ngOnInit(): void {}

}
