import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewformfl30Component } from './viewformfl30.component';

describe('Viewformfl30Component', () => {
  let component: Viewformfl30Component;
  let fixture: ComponentFixture<Viewformfl30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewformfl30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewformfl30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
