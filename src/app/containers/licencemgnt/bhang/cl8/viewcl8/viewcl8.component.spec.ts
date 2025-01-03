import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcl8Component } from './viewcl8.component';

describe('Viewcl8Component', () => {
  let component: Viewcl8Component;
  let fixture: ComponentFixture<Viewcl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewcl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewcl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
