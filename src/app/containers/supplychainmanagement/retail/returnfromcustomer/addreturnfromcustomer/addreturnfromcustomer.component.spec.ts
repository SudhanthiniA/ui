import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreturnfromcustomerComponent } from './addreturnfromcustomer.component';

describe('AddreturnfromcustomerComponent', () => {
  let component: AddreturnfromcustomerComponent;
  let fixture: ComponentFixture<AddreturnfromcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreturnfromcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreturnfromcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
