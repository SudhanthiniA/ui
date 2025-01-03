import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4Component } from './mf4.component';

describe('Mf4Component', () => {
  let component: Mf4Component;
  let fixture: ComponentFixture<Mf4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
