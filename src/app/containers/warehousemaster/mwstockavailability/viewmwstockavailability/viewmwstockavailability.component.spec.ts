import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwstockavailabilityComponent } from './viewmwstockavailability.component';

describe('ViewmwstockavailabilityComponent', () => {
  let component: ViewmwstockavailabilityComponent;
  let fixture: ComponentFixture<ViewmwstockavailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwstockavailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwstockavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
