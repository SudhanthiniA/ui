import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaymenttypeComponent } from './addpaymenttype.component';

describe('AddpaymenttypeComponent', () => {
  let component: AddpaymenttypeComponent;
  let fixture: ComponentFixture<AddpaymenttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpaymenttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpaymenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
