import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPd17Component } from './add-pd17.component';

describe('AddPd17Component', () => {
  let component: AddPd17Component;
  let fixture: ComponentFixture<AddPd17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPd17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPd17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
