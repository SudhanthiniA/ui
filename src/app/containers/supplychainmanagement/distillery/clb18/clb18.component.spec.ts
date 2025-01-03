import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb18Component } from './clb18.component';

describe('Clb18Component', () => {
  let component: Clb18Component;
  let fixture: ComponentFixture<Clb18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
