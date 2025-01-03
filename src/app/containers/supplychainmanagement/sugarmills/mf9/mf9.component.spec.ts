import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf9Component } from './mf9.component';

describe('Mf9Component', () => {
  let component: Mf9Component;
  let fixture: ComponentFixture<Mf9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
