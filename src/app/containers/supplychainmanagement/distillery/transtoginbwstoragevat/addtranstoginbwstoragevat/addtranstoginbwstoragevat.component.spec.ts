import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtranstoginbwstoragevatComponent } from './addtranstoginbwstoragevat.component';

describe('AddtranstoginbwstoragevatComponent', () => {
  let component: AddtranstoginbwstoragevatComponent;
  let fixture: ComponentFixture<AddtranstoginbwstoragevatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtranstoginbwstoragevatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtranstoginbwstoragevatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
