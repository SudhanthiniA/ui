import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb15Component } from './clb15.component';

describe('Clb15Component', () => {
  let component: Clb15Component;
  let fixture: ComponentFixture<Clb15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
