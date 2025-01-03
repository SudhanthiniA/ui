import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addflb36Component } from './addflb36.component';

describe('Addflb36Component', () => {
  let component: Addflb36Component;
  let fixture: ComponentFixture<Addflb36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addflb36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addflb36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
