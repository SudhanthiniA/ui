import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tariandsendhicl8Component } from './tariandsendhicl8.component';

describe('Tariandsendhicl8Component', () => {
  let component: Tariandsendhicl8Component;
  let fixture: ComponentFixture<Tariandsendhicl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tariandsendhicl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tariandsendhicl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
