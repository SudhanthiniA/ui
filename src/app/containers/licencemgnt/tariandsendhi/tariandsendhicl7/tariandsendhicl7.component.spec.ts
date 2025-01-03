import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tariandsendhicl7Component } from './tariandsendhicl7.component';

describe('Tariandsendhicl7Component', () => {
  let component: Tariandsendhicl7Component;
  let fixture: ComponentFixture<Tariandsendhicl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tariandsendhicl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tariandsendhicl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
