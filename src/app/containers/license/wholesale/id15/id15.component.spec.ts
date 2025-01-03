import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ID15Component } from './id15.component';

describe('ID15Component', () => {
  let component: ID15Component;
  let fixture: ComponentFixture<ID15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ID15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ID15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
