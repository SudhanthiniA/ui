import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl21Component } from './formfl21.component';

describe('Formfl21Component', () => {
  let component: Formfl21Component;
  let fixture: ComponentFixture<Formfl21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
