import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlydistillerywiseproductionComponent } from './monthlydistillerywiseproduction.component';

describe('MonthlydistillerywiseproductionComponent', () => {
  let component: MonthlydistillerywiseproductionComponent;
  let fixture: ComponentFixture<MonthlydistillerywiseproductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlydistillerywiseproductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlydistillerywiseproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
