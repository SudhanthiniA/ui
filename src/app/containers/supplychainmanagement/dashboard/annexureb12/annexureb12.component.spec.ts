import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexureb12Component } from './annexureb12.component';

describe('Annexureb12Component', () => {
  let component: Annexureb12Component;
  let fixture: ComponentFixture<Annexureb12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annexureb12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annexureb12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
