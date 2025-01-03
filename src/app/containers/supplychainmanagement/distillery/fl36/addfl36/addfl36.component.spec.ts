import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl36Component } from './addfl36.component';

describe('Addfl36Component', () => {
  let component: Addfl36Component;
  let fixture: ComponentFixture<Addfl36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
