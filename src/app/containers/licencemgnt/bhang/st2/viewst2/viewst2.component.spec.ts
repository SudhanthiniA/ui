import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewst2Component } from './viewst2.component';

describe('Viewst2Component', () => {
  let component: Viewst2Component;
  let fixture: ComponentFixture<Viewst2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewst2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewst2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
