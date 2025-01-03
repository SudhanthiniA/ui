import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acknowledgementfl36Component } from './acknowledgementfl36.component';

describe('Acknowledgementfl36Component', () => {
  let component: Acknowledgementfl36Component;
  let fixture: ComponentFixture<Acknowledgementfl36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acknowledgementfl36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acknowledgementfl36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
