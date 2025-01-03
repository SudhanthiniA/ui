import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb20Component } from './viewb20.component';

describe('Viewb20Component', () => {
  let component: Viewb20Component;
  let fixture: ComponentFixture<Viewb20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
