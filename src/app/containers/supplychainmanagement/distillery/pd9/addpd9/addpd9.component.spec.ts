import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd9Component } from './addpd9.component';

describe('Addpd9Component', () => {
  let component: Addpd9Component;
  let fixture: ComponentFixture<Addpd9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
