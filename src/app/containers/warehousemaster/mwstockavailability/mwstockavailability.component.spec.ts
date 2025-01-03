import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwstockavailabilityComponent } from './mwstockavailability.component';

describe('MwstockavailabilityComponent', () => {
  let component: MwstockavailabilityComponent;
  let fixture: ComponentFixture<MwstockavailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwstockavailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwstockavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
