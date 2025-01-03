import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeostockavailabilityComponent } from './deostockavailability.component';

describe('DeostockavailabilityComponent', () => {
  let component: DeostockavailabilityComponent;
  let fixture: ComponentFixture<DeostockavailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeostockavailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeostockavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
