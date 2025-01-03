import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest4Component } from './viewtest4.component';

describe('Viewtest4Component', () => {
  let component: Viewtest4Component;
  let fixture: ComponentFixture<Viewtest4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
