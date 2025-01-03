import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl5Component } from './viewbwfl5.component';

describe('Viewbwfl5Component', () => {
  let component: Viewbwfl5Component;
  let fixture: ComponentFixture<Viewbwfl5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
