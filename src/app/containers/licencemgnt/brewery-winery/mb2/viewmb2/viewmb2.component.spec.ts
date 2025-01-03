import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmb2Component } from './viewmb2.component';

describe('Viewmb2Component', () => {
  let component: Viewmb2Component;
  let fixture: ComponentFixture<Viewmb2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
