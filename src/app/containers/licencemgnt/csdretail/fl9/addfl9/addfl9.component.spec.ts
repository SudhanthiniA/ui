import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl9Component } from './addfl9.component';

describe('Addfl9Component', () => {
  let component: Addfl9Component;
  let fixture: ComponentFixture<Addfl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
