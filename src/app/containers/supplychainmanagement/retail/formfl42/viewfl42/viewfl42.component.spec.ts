import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl42Component } from './viewfl42.component';

describe('Viewfl42Component', () => {
  let component: Viewfl42Component;
  let fixture: ComponentFixture<Viewfl42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
