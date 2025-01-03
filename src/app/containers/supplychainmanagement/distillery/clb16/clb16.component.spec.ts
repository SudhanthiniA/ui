import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb16Component } from './clb16.component';

describe('Clb16Component', () => {
  let component: Clb16Component;
  let fixture: ComponentFixture<Clb16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
