import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddniraSt1Component } from './addnira-st1.component';

describe('AddniraSt1Component', () => {
  let component: AddniraSt1Component;
  let fixture: ComponentFixture<AddniraSt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddniraSt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddniraSt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
