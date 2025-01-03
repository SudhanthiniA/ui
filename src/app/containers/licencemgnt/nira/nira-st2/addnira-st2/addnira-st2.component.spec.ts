import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddniraSt2Component } from './addnira-st2.component';

describe('AddniraSt2Component', () => {
  let component: AddniraSt2Component;
  let fixture: ComponentFixture<AddniraSt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddniraSt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddniraSt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
