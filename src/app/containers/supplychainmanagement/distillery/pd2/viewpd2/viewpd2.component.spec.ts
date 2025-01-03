import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd2Component } from './viewpd2.component';

describe('Viewpd2Component', () => {
  let component: Viewpd2Component;
  let fixture: ComponentFixture<Viewpd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
