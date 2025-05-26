import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { ProductDetailPage } from './product-detail.page';

@Component({
  selector: 'app-image-rect-box',
  template: ''
})
class MockImageRectBoxComponent {
  @Input() image!: string;
}

describe('ProductDetailPage', () => {
  let component: ProductDetailPage;
  let fixture: ComponentFixture<ProductDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailPage],
      declarations: [MockImageRectBoxComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // mock product id
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
