import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransitgatepassComponent } from './addtransitgatepass.component';

describe('AddtransitgatepassComponent', () => {
  let component: AddtransitgatepassComponent;
  let fixture: ComponentFixture<AddtransitgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransitgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransitgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
