import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditmeasurementComponent } from './addeditmeasurement.component';

describe('AddeditmeasurementComponent', () => {
  let component: AddeditmeasurementComponent;
  let fixture: ComponentFixture<AddeditmeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditmeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditmeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
