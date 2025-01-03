import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbreakageentryComponent } from './addbreakageentry.component';

describe('AddbreakageentryComponent', () => {
  let component: AddbreakageentryComponent;
  let fixture: ComponentFixture<AddbreakageentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbreakageentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbreakageentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
