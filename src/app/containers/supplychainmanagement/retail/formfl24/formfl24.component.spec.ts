import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl24Component } from './formfl24.component';

describe('Formfl24Component', () => {
  let component: Formfl24Component;
  let fixture: ComponentFixture<Formfl24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
