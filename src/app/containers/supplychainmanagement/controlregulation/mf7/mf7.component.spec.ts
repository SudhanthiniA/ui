import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf7Component } from './mf7.component';

describe('Mf7Component', () => {
  let component: Mf7Component;
  let fixture: ComponentFixture<Mf7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
