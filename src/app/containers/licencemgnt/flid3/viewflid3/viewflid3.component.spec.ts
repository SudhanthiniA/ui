import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflid3Component } from './viewflid3.component';

describe('Viewflid3Component', () => {
  let component: Viewflid3Component;
  let fixture: ComponentFixture<Viewflid3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflid3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
