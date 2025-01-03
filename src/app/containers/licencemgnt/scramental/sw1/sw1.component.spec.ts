import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sw1Component } from './sw1.component';

describe('Sw1Component', () => {
  let component: Sw1Component;
  let fixture: ComponentFixture<Sw1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sw1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
