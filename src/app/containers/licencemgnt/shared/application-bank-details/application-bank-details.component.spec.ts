import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationBankDetailsComponent } from './application-bank-details.component';

describe('ApplicationBankDetailsComponent', () => {
  let component: ApplicationBankDetailsComponent;
  let fixture: ComponentFixture<ApplicationBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
