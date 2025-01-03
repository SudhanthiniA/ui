import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl30Component } from './formfl30.component';

describe('Formfl30Component', () => {
  let component: Formfl30Component;
  let fixture: ComponentFixture<Formfl30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
