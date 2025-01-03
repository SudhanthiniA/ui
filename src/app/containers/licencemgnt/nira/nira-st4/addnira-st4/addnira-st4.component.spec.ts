import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddniraSt4Component } from './addnira-st4.component';

describe('AddniraSt4Component', () => {
  let component: AddniraSt4Component;
  let fixture: ComponentFixture<AddniraSt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddniraSt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddniraSt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
