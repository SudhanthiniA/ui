import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addflb11Component } from './addflb11.component';

describe('Addflb11Component', () => {
  let component: Addflb11Component;
  let fixture: ComponentFixture<Addflb11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addflb11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addflb11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
