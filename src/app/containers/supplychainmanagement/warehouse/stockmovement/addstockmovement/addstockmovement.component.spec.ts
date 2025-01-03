import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockmovementComponent } from './addstockmovement.component';

describe('AddstockmovementComponent', () => {
  let component: AddstockmovementComponent;
  let fixture: ComponentFixture<AddstockmovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockmovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockmovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
