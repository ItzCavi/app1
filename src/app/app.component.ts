import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonList, IonItem, IonThumbnail, IonLabel, MenuController } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { closeOutline, cartOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    IonApp, 
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    RouterModule
  ],
})
export class AppComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private menuController: MenuController) {
    addIcons({
      closeOutline,
      cartOutline
    });
  }

  ngOnInit() {
    // Enable side menu swipe
    this.menuController.enable(true, 'cart');
  }

  async closeMenu() {
    await this.menuController.close('cart');
  }

  increaseQuantity(item: CartItem) {
    const index = this.cartItems.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.cartItems[index].quantity++;
    }
  }

  decreaseQuantity(item: CartItem) {
    const index = this.cartItems.findIndex(i => i.id === item.id);
    if (index > -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  cartTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  cartItemCount() {
    return this.cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
  }
}
