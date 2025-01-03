import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPd26Component } from './add-edit-pd26.component';

describe('AddEditPd26Component', () => {
  let component: AddEditPd26Component;
  let fixture: ComponentFixture<AddEditPd26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPd26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPd26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
