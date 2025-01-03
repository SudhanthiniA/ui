import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb5Component } from './clb5.component';

describe('Clb5Component', () => {
  let component: Clb5Component;
  let fixture: ComponentFixture<Clb5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
