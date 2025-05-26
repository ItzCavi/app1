import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListHeadingComponent } from './list-heading.component';

describe('ListHeadingComponent', () => {
  let component: ListHeadingComponent;
  let fixture: ComponentFixture<ListHeadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ListHeadingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListHeadingComponent);
    component = fixture.componentInstance;
    component.heading = () => ''; // Fix input error by setting heading to empty function returning string
    component.buttonTitle = () => 'See All'; // Fix input error by setting buttonTitle to function returning string
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
