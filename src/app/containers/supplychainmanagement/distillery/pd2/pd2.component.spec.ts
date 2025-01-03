import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd2Component } from './pd2.component';

describe('Pd2Component', () => {
  let component: Pd2Component;
  let fixture: ComponentFixture<Pd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
