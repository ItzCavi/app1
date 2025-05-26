import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AccountPage } from './account.page';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // mock user id or similar
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
