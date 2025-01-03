import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockavailabilitywholesaleComponent } from './stockavailabilitywholesale.component';

describe('StockavailabilitywholesaleComponent', () => {
  let component: StockavailabilitywholesaleComponent;
  let fixture: ComponentFixture<StockavailabilitywholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockavailabilitywholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockavailabilitywholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
