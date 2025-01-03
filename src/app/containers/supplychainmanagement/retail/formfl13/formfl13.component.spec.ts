import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl13Component } from './formfl13.component';

describe('Formfl13Component', () => {
  let component: Formfl13Component;
  let fixture: ComponentFixture<Formfl13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
