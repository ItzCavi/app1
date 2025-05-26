import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ListHeadingComponent } from '../../../components/list-heading/list-heading.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { ProductListHorizontalComponent } from '../../../components/product-list-horizontal/product-list-horizontal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, ListHeadingComponent, BannerComponent, ProductListHorizontalComponent],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the HomePage', () => {
    expect(component).toBeTruthy();
  });

  it('should display Special Offers heading', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-list-heading').getAttribute('heading')).toContain('Special Offers');
  });

  it('should display banner component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-banner')).toBeTruthy();
  });

  it('should display Featured Products heading when products exist', () => {
    component.products.set([{ id: 1, name: 'Test Product', description: '', rating: 5, image: '', category_id: 1, seller_id: 1, default_price: 10, cut_price: null, varieties: [], type: 'product' }]);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const headings = compiled.querySelectorAll('app-list-heading');
    expect(headings[1].getAttribute('heading')).toContain('Featured Products');
  });

  it('should display product list when products exist', () => {
    component.products.set([{ id: 1, name: 'Test Product', description: '', rating: 5, image: '', category_id: 1, seller_id: 1, default_price: 10, cut_price: null, varieties: [], type: 'product' }]);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-product-list-horizontal')).toBeTruthy();
  });

  it('should call addToCart when product list emits addToCart event', () => {
    spyOn(component, 'addToCart');
    component.products.set([{ id: 1, name: 'Test Product', description: '', rating: 5, image: '', category_id: 1, seller_id: 1, default_price: 10, cut_price: null, varieties: [], type: 'product' }]);
    fixture.detectChanges();
    const productList = fixture.debugElement.nativeElement.querySelector('app-product-list-horizontal');
    productList.dispatchEvent(new CustomEvent('addToCart', { detail: component.products()[0] }));
    expect(component.addToCart).toHaveBeenCalledWith(component.products()[0]);
  });
});
