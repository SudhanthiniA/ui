import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstockavailabilityComponent } from './addeditstockavailability.component';

describe('AddeditstockavailabilityComponent', () => {
  let component: AddeditstockavailabilityComponent;
  let fixture: ComponentFixture<AddeditstockavailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditstockavailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditstockavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
