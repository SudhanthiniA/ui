import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewformfl33Component } from './viewformfl33.component';

describe('Viewformfl33Component', () => {
  let component: Viewformfl33Component;
  let fixture: ComponentFixture<Viewformfl33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewformfl33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewformfl33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
