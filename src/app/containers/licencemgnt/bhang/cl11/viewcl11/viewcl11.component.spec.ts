import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcl11Component } from './viewcl11.component';

describe('Viewcl11Component', () => {
  let component: Viewcl11Component;
  let fixture: ComponentFixture<Viewcl11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewcl11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewcl11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
