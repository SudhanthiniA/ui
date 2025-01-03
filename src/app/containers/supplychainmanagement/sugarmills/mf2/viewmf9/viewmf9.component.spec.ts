import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmf9Component } from './viewmf9.component';

describe('Viewmf9Component', () => {
  let component: Viewmf9Component;
  let fixture: ComponentFixture<Viewmf9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmf9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmf9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
