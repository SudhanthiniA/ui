import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest10Component } from './viewtest10.component';

describe('Viewtest10Component', () => {
  let component: Viewtest10Component;
  let fixture: ComponentFixture<Viewtest10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
