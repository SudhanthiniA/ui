import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevicehardwarenameComponent } from './devicehardwarename.component';

describe('AdddevicehardwarenameComponent', () => {
  let component: AdddevicehardwarenameComponent;
  let fixture: ComponentFixture<AdddevicehardwarenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddevicehardwarenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevicehardwarenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
