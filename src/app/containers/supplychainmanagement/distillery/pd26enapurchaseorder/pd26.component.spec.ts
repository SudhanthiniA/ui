import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26Component } from './pd26.component';

describe('Pd8aComponent', () => {
  let component: Pd26Component;
  let fixture: ComponentFixture<Pd26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
