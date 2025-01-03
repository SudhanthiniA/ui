import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransportationpassComponent } from './addtransportationpass.component';

describe('AddtransportationpassComponent', () => {
  let component: AddtransportationpassComponent;
  let fixture: ComponentFixture<AddtransportationpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransportationpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransportationpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
