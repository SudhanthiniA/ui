import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcl12Component } from './viewcl12.component';

describe('Viewcl12Component', () => {
  let component: Viewcl12Component;
  let fixture: ComponentFixture<Viewcl12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewcl12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewcl12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
