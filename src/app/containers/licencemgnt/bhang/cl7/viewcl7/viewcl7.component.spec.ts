import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcl7Component } from './viewcl7.component';

describe('Viewcl7Component', () => {
  let component: Viewcl7Component;
  let fixture: ComponentFixture<Viewcl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewcl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewcl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
