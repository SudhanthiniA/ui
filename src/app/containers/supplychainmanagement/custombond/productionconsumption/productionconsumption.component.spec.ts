import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionconsumptionComponent } from './productionconsumption.component';

describe('ProductionconsumptionComponent', () => {
  let component: ProductionconsumptionComponent;
  let fixture: ComponentFixture<ProductionconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
