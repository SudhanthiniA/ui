import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransportpassparentunitComponent } from './addtransportpassparentunit.component';

describe('AddtransportpassparentunitComponent', () => {
  let component: AddtransportpassparentunitComponent;
  let fixture: ComponentFixture<AddtransportpassparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransportpassparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransportpassparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
