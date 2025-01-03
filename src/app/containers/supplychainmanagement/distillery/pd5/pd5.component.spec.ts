import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd5Component } from './pd5.component';

describe('Pd5Component', () => {
  let component: Pd5Component;
  let fixture: ComponentFixture<Pd5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
