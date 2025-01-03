import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb13Component } from './clb13.component';

describe('Clb13Component', () => {
  let component: Clb13Component;
  let fixture: ComponentFixture<Clb13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
