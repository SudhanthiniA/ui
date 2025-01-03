import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockavailabilityComponent } from './addstockavailability.component';

describe('AddstockavailabilityComponent', () => {
  let component: AddstockavailabilityComponent;
  let fixture: ComponentFixture<AddstockavailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockavailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
