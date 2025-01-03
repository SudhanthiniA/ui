import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfla1Component } from './viewfla1.component';

describe('Viewfla1Component', () => {
  let component: Viewfla1Component;
  let fixture: ComponentFixture<Viewfla1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfla1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
