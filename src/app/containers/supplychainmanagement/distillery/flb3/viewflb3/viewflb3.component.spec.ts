import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflb3Component } from './viewflb3.component';

describe('Viewflb3Component', () => {
  let component: Viewflb3Component;
  let fixture: ComponentFixture<Viewflb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
