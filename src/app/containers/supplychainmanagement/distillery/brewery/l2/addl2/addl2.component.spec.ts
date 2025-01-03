import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addl2Component } from './addl2.component';

describe('Addl2Component', () => {
  let component: Addl2Component;
  let fixture: ComponentFixture<Addl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
