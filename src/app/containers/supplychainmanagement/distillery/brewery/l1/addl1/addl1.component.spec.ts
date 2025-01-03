import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addl1Component } from './addl1.component';

describe('Addl1Component', () => {
  let component: Addl1Component;
  let fixture: ComponentFixture<Addl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
