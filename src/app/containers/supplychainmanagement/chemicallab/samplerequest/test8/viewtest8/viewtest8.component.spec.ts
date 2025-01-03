import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest8Component } from './viewtest8.component';

describe('Viewtest8Component', () => {
  let component: Viewtest8Component;
  let fixture: ComponentFixture<Viewtest8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
