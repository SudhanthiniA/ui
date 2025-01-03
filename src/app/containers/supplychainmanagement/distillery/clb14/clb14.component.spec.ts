import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb14Component } from './clb14.component';

describe('Clb14Component', () => {
  let component: Clb14Component;
  let fixture: ComponentFixture<Clb14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
