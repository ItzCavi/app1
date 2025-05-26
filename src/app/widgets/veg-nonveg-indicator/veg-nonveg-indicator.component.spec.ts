import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VegNonvegIndicatorComponent } from './veg-nonveg-indicator.component';

describe('VegNonvegIndicatorComponent', () => {
  let component: VegNonvegIndicatorComponent;
  let fixture: ComponentFixture<VegNonvegIndicatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), VegNonvegIndicatorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VegNonvegIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
