import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb11Component } from './clb11.component';

describe('Clb11Component', () => {
  let component: Clb11Component;
  let fixture: ComponentFixture<Clb11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
