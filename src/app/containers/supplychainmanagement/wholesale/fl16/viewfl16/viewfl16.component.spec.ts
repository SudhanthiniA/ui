import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl16Component } from './viewfl16.component';

describe('Viewfl16Component', () => {
  let component: Viewfl16Component;
  let fixture: ComponentFixture<Viewfl16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
