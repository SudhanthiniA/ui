import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtranspassparentloginComponent } from './addtranspassparentlogin.component';

describe('AddtranspassparentloginComponent', () => {
  let component: AddtranspassparentloginComponent;
  let fixture: ComponentFixture<AddtranspassparentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtranspassparentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtranspassparentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
