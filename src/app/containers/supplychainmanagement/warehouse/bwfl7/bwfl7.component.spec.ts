import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl7Component } from './bwfl7.component';

describe('Bwfl7Component', () => {
  let component: Bwfl7Component;
  let fixture: ComponentFixture<Bwfl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
