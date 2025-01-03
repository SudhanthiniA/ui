import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addflb3Component } from './addflb3.component';

describe('Addflb3Component', () => {
  let component: Addflb3Component;
  let fixture: ComponentFixture<Addflb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addflb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addflb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
