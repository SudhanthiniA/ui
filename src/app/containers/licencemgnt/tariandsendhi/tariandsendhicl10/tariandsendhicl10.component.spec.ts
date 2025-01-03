import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tariandsendhicl10Component } from './tariandsendhicl10.component';

describe('Tariandsendhicl10Component', () => {
  let component: Tariandsendhicl10Component;
  let fixture: ComponentFixture<Tariandsendhicl10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tariandsendhicl10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tariandsendhicl10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
