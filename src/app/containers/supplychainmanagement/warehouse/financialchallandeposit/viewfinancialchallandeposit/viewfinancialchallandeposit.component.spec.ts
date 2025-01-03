import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfinancialchallandepositComponent } from './viewfinancialchallandeposit.component';

describe('ViewfinancialchallandepositComponent', () => {
  let component: ViewfinancialchallandepositComponent;
  let fixture: ComponentFixture<ViewfinancialchallandepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfinancialchallandepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfinancialchallandepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
