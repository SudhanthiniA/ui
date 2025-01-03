import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl9Component } from './bwfl9.component';

describe('Bwfl9Component', () => {
  let component: Bwfl9Component;
  let fixture: ComponentFixture<Bwfl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
