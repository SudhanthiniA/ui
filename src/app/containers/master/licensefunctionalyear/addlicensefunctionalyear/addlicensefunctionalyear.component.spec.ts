import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlicensefunctionalyearComponent } from './addlicensefunctionalyear.component';

describe('AddlicensefunctionalyearComponent', () => {
  let component: AddlicensefunctionalyearComponent;
  let fixture: ComponentFixture<AddlicensefunctionalyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlicensefunctionalyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlicensefunctionalyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
