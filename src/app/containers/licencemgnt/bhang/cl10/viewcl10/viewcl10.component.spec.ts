import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcl10Component } from './viewcl10.component';

describe('Viewcl10Component', () => {
  let component: Viewcl10Component;
  let fixture: ComponentFixture<Viewcl10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewcl10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewcl10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
