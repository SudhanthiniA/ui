import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmwbreakageentryComponent } from './addmwbreakageentry.component';

describe('AddmwbreakageentryComponent', () => {
  let component: AddmwbreakageentryComponent;
  let fixture: ComponentFixture<AddmwbreakageentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmwbreakageentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmwbreakageentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
