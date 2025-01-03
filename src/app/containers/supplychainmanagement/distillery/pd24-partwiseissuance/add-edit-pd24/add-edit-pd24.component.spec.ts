import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPd24Component } from './add-edit-pd24.component';

describe('AddEditPd24Component', () => {
  let component: AddEditPd24Component;
  let fixture: ComponentFixture<AddEditPd24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPd24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPd24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
