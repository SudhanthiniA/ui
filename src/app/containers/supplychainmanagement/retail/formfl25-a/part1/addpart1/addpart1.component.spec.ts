import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpart1Component } from './addpart1.component';

describe('Addpart1Component', () => {
  let component: Addpart1Component;
  let fixture: ComponentFixture<Addpart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
