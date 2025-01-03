import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb14Component } from './viewb14.component';

describe('Viewb14Component', () => {
  let component: Viewb14Component;
  let fixture: ComponentFixture<Viewb14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
