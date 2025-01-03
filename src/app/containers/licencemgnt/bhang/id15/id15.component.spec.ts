import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id15Component } from './id15.component';

describe('Id15Component', () => {
  let component: Id15Component;
  let fixture: ComponentFixture<Id15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
