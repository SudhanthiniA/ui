import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb4Component } from './clb4.component';

describe('Clb4Component', () => {
  let component: Clb4Component;
  let fixture: ComponentFixture<Clb4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
