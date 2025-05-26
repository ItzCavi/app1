import { VegNonvegIndicatorComponent } from './../../widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';
import { Component, input, output, OnInit } from '@angular/core';
import { Strings } from 'src/app/enums/strings.enum';
import { Product } from 'src/app/interfaces/product.interface';
import {
  IonCard,
  IonThumbnail,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, star, cartOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonThumbnail,
    IonImg,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
    IonButton,
    VegNonvegIndicatorComponent,
    RouterLink
  ],
})
export class ProductComponent implements OnInit {
  item = input<Product>();
  addToCart = output<void>();
  currency = Strings.currency;

  constructor() {
    addIcons({
      star,
      heart,
      cartOutline
    });
  }

  ngOnInit() {}

  onAddToCart(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.addToCart.emit();
  }
}
