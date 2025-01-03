import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpart4Component } from './addpart4.component';

describe('Addpart4Component', () => {
  let component: Addpart4Component;
  let fixture: ComponentFixture<Addpart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
