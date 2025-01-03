import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtranspassgenfordistbondwareComponent } from './addtranspassgenfordistbondware.component';

describe('AddtranspassgenfordistbondwareComponent', () => {
  let component: AddtranspassgenfordistbondwareComponent;
  let fixture: ComponentFixture<AddtranspassgenfordistbondwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtranspassgenfordistbondwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtranspassgenfordistbondwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
