import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrewerytankregistrationComponent } from './addbrewerytankregistration.component';

describe('AddbrewerytankregistrationComponent', () => {
  let component: AddbrewerytankregistrationComponent;
  let fixture: ComponentFixture<AddbrewerytankregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrewerytankregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrewerytankregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
