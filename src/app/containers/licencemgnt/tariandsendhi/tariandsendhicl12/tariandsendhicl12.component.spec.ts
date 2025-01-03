import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tariandsendhicl12Component } from './tariandsendhicl12.component';

describe('Tariandsendhicl12Component', () => {
  let component: Tariandsendhicl12Component;
  let fixture: ComponentFixture<Tariandsendhicl12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tariandsendhicl12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tariandsendhicl12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
