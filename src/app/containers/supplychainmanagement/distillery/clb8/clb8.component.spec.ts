import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb8Component } from './clb8.component';

describe('Clb8Component', () => {
  let component: Clb8Component;
  let fixture: ComponentFixture<Clb8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
