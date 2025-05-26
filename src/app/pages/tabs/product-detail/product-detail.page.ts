import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonFabButton,
  IonIcon,
  IonRow,
  IonCol, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonText, 
  IonListHeader, 
  IonAvatar, 
  IonButton, 
  IonFooter,
  IonSpinner } from '@ionic/angular/standalone';
import { Strings } from 'src/app/enums/strings.enum';
import { Product } from 'src/app/interfaces/product.interface';
import { Seller } from 'src/app/interfaces/seller.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { addIcons } from 'ionicons';
import { heartOutline, shareSocialOutline, star, chatboxEllipses, call, bagHandle } from 'ionicons/icons';
import { ImageRectBoxComponent } from 'src/app/widgets/image-rect-box/image-rect-box.component';
import { VegNonvegIndicatorComponent } from 'src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonFooter, 
    IonButton, 
    IonAvatar, 
    IonListHeader, 
    IonText, 
    IonLabel, 
    IonItem, 
    IonList, 
    IonCol,
    IonRow,
    IonIcon,
    IonFabButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    NgClass,
    IonSpinner,
    ImageRectBoxComponent,
    VegNonvegIndicatorComponent
  ],
})
export class ProductDetailPage implements OnInit {
  currency = Strings.currency;
  readMore = signal<boolean>(false);
  productDetails = signal<(Product & { seller?: Seller; category?: Category }) | null>(null);
  isLoading = signal<boolean>(true);
  hasError = signal<boolean>(false);
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  constructor() {
    addIcons({
      heartOutline,
      shareSocialOutline,
      star,
      chatboxEllipses,
      call,
      bagHandle,
    });
  }

  ngOnInit() {
    this.loadProductDetails();
  }

  private loadProductDetails(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (!idParam || isNaN(Number(idParam))) {
      this.handleError();
      return;
    }

    const id = parseInt(idParam, 10);
    const product = this.productService.getProductById(id);

    if (!product) {
      this.handleError();
      return;
    }

    this.productDetails.set(product);
    this.isLoading.set(false);
  }

  private handleError(): void {
    this.hasError.set(true);
    this.isLoading.set(false);
    this.router.navigate(['/tabs/home']);
  }
}
