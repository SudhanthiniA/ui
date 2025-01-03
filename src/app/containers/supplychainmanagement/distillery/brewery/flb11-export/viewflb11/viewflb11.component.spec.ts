import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflb11Component } from './viewflb11.component';

describe('Viewflb11Component', () => {
  let component: Viewflb11Component;
  let fixture: ComponentFixture<Viewflb11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflb11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflb11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
