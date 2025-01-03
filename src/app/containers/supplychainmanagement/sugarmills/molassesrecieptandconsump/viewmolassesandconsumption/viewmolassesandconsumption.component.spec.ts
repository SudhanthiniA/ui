import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmolassesandconsumptionComponent } from './viewmolassesandconsumption.component';

describe('ViewmolassesandconsumptionComponent', () => {
  let component: ViewmolassesandconsumptionComponent;
  let fixture: ComponentFixture<ViewmolassesandconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmolassesandconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmolassesandconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
