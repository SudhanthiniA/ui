import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsummaryComponent } from './billsummary.component';

describe('BillsummaryComponent', () => {
  let component: BillsummaryComponent;
  let fixture: ComponentFixture<BillsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
