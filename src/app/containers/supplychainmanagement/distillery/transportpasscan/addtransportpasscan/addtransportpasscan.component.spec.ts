import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransportpasscanComponent } from './addtransportpasscan.component';

describe('AddtransportpasscanComponent', () => {
  let component: AddtransportpasscanComponent;
  let fixture: ComponentFixture<AddtransportpasscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransportpasscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransportpasscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
