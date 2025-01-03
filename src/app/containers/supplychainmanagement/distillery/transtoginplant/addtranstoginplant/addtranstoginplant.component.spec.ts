import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtranstoginplantComponent } from './addtranstoginplant.component';

describe('AddtranstoginplantComponent', () => {
  let component: AddtranstoginplantComponent;
  let fixture: ComponentFixture<AddtranstoginplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtranstoginplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtranstoginplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
