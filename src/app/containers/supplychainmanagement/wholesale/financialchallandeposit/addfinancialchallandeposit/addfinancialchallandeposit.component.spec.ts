import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfinancialchallandepositComponent } from './addfinancialchallandeposit.component';

describe('AddfinancialchallandepositComponent', () => {
  let component: AddfinancialchallandepositComponent;
  let fixture: ComponentFixture<AddfinancialchallandepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfinancialchallandepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfinancialchallandepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
