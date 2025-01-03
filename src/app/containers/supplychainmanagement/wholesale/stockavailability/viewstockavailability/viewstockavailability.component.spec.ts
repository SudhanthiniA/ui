import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockavailabilityComponent } from './viewstockavailability.component';

describe('ViewstockavailabilityComponent', () => {
  let component: ViewstockavailabilityComponent;
  let fixture: ComponentFixture<ViewstockavailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockavailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
