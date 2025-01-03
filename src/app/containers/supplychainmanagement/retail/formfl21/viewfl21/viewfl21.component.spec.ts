import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl21Component } from './viewfl21.component';

describe('Viewfl21Component', () => {
  let component: Viewfl21Component;
  let fixture: ComponentFixture<Viewfl21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
