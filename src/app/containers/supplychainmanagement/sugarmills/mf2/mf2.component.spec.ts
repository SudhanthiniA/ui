import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf2Component } from './mf2.component';

describe('Mf2Component', () => {
  let component: Mf2Component;
  let fixture: ComponentFixture<Mf2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
