import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmb5Component } from './viewmb5.component';

describe('Viewmb5Component', () => {
  let component: Viewmb5Component;
  let fixture: ComponentFixture<Viewmb5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmb5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
