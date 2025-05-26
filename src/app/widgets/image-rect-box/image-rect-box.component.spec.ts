import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageRectBoxComponent } from './image-rect-box.component';

describe('ImageRectBoxComponent', () => {
  let component: ImageRectBoxComponent;
  let fixture: ComponentFixture<ImageRectBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ImageRectBoxComponent],
      declarations: [] // Remove declarations of standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(ImageRectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
