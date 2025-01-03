import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest6Component } from './viewtest6.component';

describe('Viewtest6Component', () => {
  let component: Viewtest6Component;
  let fixture: ComponentFixture<Viewtest6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
