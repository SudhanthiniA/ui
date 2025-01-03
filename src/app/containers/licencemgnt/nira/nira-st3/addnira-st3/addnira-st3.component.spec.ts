import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddniraSt3Component } from './addnira-st3.component';

describe('AddniraSt3Component', () => {
  let component: AddniraSt3Component;
  let fixture: ComponentFixture<AddniraSt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddniraSt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddniraSt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
