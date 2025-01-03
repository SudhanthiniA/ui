import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatepassfromdistillerytomanufacturewholesaleComponent } from './gatepassfromdistillerytomanufacturewholesale.component';

describe('GatepassfromdistillerytomanufacturewholesaleComponent', () => {
  let component: GatepassfromdistillerytomanufacturewholesaleComponent;
  let fixture: ComponentFixture<GatepassfromdistillerytomanufacturewholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatepassfromdistillerytomanufacturewholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatepassfromdistillerytomanufacturewholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
