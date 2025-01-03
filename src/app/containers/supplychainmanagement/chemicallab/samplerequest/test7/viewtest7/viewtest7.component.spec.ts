import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest7Component } from './viewtest7.component';

describe('Viewtest7Component', () => {
  let component: Viewtest7Component;
  let fixture: ComponentFixture<Viewtest7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
