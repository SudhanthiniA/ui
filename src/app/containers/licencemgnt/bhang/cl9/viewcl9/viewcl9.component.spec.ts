import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcl9Component } from './viewcl9.component';

describe('Viewcl9Component', () => {
  let component: Viewcl9Component;
  let fixture: ComponentFixture<Viewcl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewcl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewcl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
