import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductComponent } from '../product/product.component';

// Removed swiper import and register to fix build error
// import { register } from 'swiper/element/bundle';

// register();

@Component({
  selector: 'app-product-list-horizontal',
  templateUrl: './product-list-horizontal.component.html',
  styleUrls: ['./product-list-horizontal.component.scss'],
  standalone: true,
  imports: [CommonModule, ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductListHorizontalComponent implements OnInit {
  @Input() products: Product[] = []; // Initialized to empty array
  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}

  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
}
