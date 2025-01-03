import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd9Component } from './viewpd9.component';

describe('Viewpd9Component', () => {
  let component: Viewpd9Component;
  let fixture: ComponentFixture<Viewpd9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
