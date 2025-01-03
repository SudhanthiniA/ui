import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl25Component } from './formfl25.component';

describe('Formfl25Component', () => {
  let component: Formfl25Component;
  let fixture: ComponentFixture<Formfl25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
