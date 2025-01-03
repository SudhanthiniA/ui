import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl28Component } from './formfl28.component';

describe('Formfl28Component', () => {
  let component: Formfl28Component;
  let fixture: ComponentFixture<Formfl28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
