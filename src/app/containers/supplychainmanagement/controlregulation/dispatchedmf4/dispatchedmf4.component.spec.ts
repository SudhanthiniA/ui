import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispatchedmf4Component } from './dispatchedmf4.component';

describe('Dispatchedmf4Component', () => {
  let component: Dispatchedmf4Component;
  let fixture: ComponentFixture<Dispatchedmf4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dispatchedmf4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispatchedmf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
