import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransportpassgenerationComponent } from './addtransportpassgeneration.component';

describe('AddtransportpassgenerationComponent', () => {
  let component: AddtransportpassgenerationComponent;
  let fixture: ComponentFixture<AddtransportpassgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransportpassgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransportpassgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
