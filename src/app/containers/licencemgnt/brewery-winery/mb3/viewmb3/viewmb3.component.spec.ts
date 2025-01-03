import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmb3Component } from './viewmb3.component';

describe('Viewmb3Component', () => {
  let component: Viewmb3Component;
  let fixture: ComponentFixture<Viewmb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
