import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonText,
  IonButtons,
  IonMenuButton,
  IonBadge,
  PopoverController,
  MenuController,
  IonImg
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  locationOutline,
  chevronDownOutline,
  optionsOutline,
  cartOutline,
  notificationsOutline,
  location,
  options,
  notifications
} from 'ionicons/icons';
import { BannerComponent } from '../../../components/banner/banner.component';
import { CategoriesComponent } from '../../../components/categories/categories.component';
import { ListHeadingComponent } from '../../../components/list-heading/list-heading.component';
import { ProductListHorizontalComponent } from '../../../components/product-list-horizontal/product-list-horizontal.component';
import { PopoverComponent } from './popover.component';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonButton,
    IonIcon,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonText,
    IonButtons,
    IonMenuButton,
    IonBadge,
    IonImg,
    BannerComponent,
    CategoriesComponent,
    ListHeadingComponent,
    ProductListHorizontalComponent
  ],
})

export class HomePage {
  @ViewChild('searchInput') searchInput!: IonSearchbar;

  selectedLocation: string;

  banners = signal([
    { id: '1', banner: 'assets/banners/1.jpg', active: true },
    { id: '2', banner: 'assets/banners/2.jpg', active: false },
    { id: '3', banner: 'assets/banners/3.jpg', active: false },
  ]);

  categories = signal([
    { id: 1, name: 'Cakes', image: 'assets/categories/cake.png' },
    { id: 2, name: 'Cookies', image: 'assets/categories/cookie.png' },
    { id: 3, name: 'Cupcakes', image: 'assets/categories/cupcake.png' },
    { id: 4, name: 'Donuts', image: 'assets/categories/donut.png' },
    { id: 5, name: 'Breads', image: 'assets/categories/breads.png' },
  ]);

  products = signal([
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Delicious chocolate cake',
      rating: 4.5,
      image: 'assets/products/chocolate-cake.jpg',
      category_id: 1,
      seller_id: 1,
      default_price: 599,
      cut_price: null,
      varieties: [],
      type: 'veg'
    },
    {
      id: 2,
      name: 'Red Velvet Cake',
      description: 'Tasty red velvet cake',
      rating: 4.7,
      image: 'assets/products/red_velvet_cake.jpg',
      category_id: 1,
      seller_id: 1,
      default_price: 699,
      cut_price: null,
      varieties: [],
      type: 'veg'
    },
    {
      id: 3,
      name: 'Black Forest Cake',
      description: 'Rich black forest cake',
      rating: 4.8,
      image: 'assets/products/black_forest_cake.jpg',
      category_id: 1,
      seller_id: 1,
      default_price: 799,
      cut_price: null,
      varieties: [],
      type: 'veg'
    },
  ]);

  cartItems = signal<CartItem[]>([]);

  constructor(
    private popoverController: PopoverController,
    private menuController: MenuController,
    private locationService: LocationService
  ) {
    this.selectedLocation = this.locationService.getLocation() || 'Mumbai, Maharashtra';
    addIcons({location, chevronDownOutline, cartOutline, notifications, options, locationOutline, optionsOutline, notificationsOutline});
  }

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    if (data) {
      this.selectedLocation = data;
      this.locationService.setLocation(data);
    }
  }

  openCart() {
    this.menuController.open('cart');
  }

  addToCart(product: any) {
    const existingItem = this.cartItems().find(item => item.id === product.id);
    if (existingItem) {
      this.increaseQuantity(existingItem);
    } else {
      this.cartItems.update(items => [...items, { ...product, quantity: 1 }]);
    }
    this.openCart();
  }

  increaseQuantity(item: CartItem) {
    this.cartItems.update(items =>
      items.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity === 1) {
      this.removeItem(item);
    } else {
      this.cartItems.update(items =>
        items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    }
  }

  removeItem(item: CartItem) {
    this.cartItems.update(items => items.filter(i => i.id !== item.id));
  }

  cartTotal() {
    return this.cartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  cartItemCount() {
    return this.cartItems().reduce(
      (count, item) => count + item.quantity,
      0
    );
  }

  getSpecialOffersHeading(): string {
    return 'Special Offers';
  }

  getFeaturedProductsHeading(): string {
    return 'Featured Products';
  }
}
