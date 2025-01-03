import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb7Component } from './mb7.component';

describe('Mb7Component', () => {
  let component: Mb7Component;
  let fixture: ComponentFixture<Mb7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mb7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mb7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
