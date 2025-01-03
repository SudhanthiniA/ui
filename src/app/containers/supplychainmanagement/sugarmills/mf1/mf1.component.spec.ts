import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf1Component } from './mf1.component';

describe('Mf1Component', () => {
  let component: Mf1Component;
  let fixture: ComponentFixture<Mf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
