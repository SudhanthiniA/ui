import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl41Component } from './fl41.component';

describe('Fl41Component', () => {
  let component: Fl41Component;
  let fixture: ComponentFixture<Fl41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
