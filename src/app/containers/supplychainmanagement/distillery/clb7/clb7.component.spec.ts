import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb7Component } from './clb7.component';

describe('Clb7Component', () => {
  let component: Clb7Component;
  let fixture: ComponentFixture<Clb7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
