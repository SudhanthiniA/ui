import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewst3Component } from './viewst3.component';

describe('Viewst3Component', () => {
  let component: Viewst3Component;
  let fixture: ComponentFixture<Viewst3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewst3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewst3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
