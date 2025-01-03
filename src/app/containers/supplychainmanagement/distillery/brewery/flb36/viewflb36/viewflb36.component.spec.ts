import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflb36Component } from './viewflb36.component';

describe('Viewflb36Component', () => {
  let component: Viewflb36Component;
  let fixture: ComponentFixture<Viewflb36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflb36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflb36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
