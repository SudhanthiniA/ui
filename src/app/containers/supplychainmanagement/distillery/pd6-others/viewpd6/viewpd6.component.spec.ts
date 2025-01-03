import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd6Component } from './viewpd6.component';

describe('Viewpd6Component', () => {
  let component: Viewpd6Component;
  let fixture: ComponentFixture<Viewpd6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
