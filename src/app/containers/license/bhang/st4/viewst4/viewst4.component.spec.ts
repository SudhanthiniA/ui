import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewst4Component } from './viewst4.component';

describe('Viewst4Component', () => {
  let component: Viewst4Component;
  let fixture: ComponentFixture<Viewst4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewst4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewst4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
