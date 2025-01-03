import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl16Component } from './addfl16.component';

describe('Addfl16Component', () => {
  let component: Addfl16Component;
  let fixture: ComponentFixture<Addfl16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
