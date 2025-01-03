import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb10Component } from './clb10.component';

describe('Clb10Component', () => {
  let component: Clb10Component;
  let fixture: ComponentFixture<Clb10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
