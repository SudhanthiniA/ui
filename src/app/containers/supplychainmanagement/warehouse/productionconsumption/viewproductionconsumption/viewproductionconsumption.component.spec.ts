import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductionconsumptionComponent } from './viewproductionconsumption.component';

describe('ViewproductionconsumptionComponent', () => {
  let component: ViewproductionconsumptionComponent;
  let fixture: ComponentFixture<ViewproductionconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductionconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductionconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
