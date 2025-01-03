import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmworderpickupComponent } from './addmworderpickup.component';

describe('AddmworderpickupComponent', () => {
  let component: AddmworderpickupComponent;
  let fixture: ComponentFixture<AddmworderpickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmworderpickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmworderpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
