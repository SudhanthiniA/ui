import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl42Component } from './formfl42.component';

describe('Formfl42Component', () => {
  let component: Formfl42Component;
  let fixture: ComponentFixture<Formfl42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
