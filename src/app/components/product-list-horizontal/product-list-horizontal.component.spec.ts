import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductListHorizontalComponent } from './product-list-horizontal.component';

describe('ProductListHorizontalComponent', () => {
  let component: ProductListHorizontalComponent;
  let fixture: ComponentFixture<ProductListHorizontalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ProductListHorizontalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
