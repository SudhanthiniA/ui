import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb12Component } from './clb12.component';

describe('Clb12Component', () => {
  let component: Clb12Component;
  let fixture: ComponentFixture<Clb12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
