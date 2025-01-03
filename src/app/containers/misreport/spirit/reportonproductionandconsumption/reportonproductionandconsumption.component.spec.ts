import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportonproductionandconsumptionComponent } from './reportonproductionandconsumption.component';

describe('ReportonproductionandconsumptionComponent', () => {
  let component: ReportonproductionandconsumptionComponent;
  let fixture: ComponentFixture<ReportonproductionandconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportonproductionandconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportonproductionandconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
