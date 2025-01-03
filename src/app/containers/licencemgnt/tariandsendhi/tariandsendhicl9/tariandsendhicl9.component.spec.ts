import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tariandsendhicl9Component } from './tariandsendhicl9.component';

describe('Tariandsendhicl9Component', () => {
  let component: Tariandsendhicl9Component;
  let fixture: ComponentFixture<Tariandsendhicl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tariandsendhicl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tariandsendhicl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
