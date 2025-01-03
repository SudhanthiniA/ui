import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breweryform4Component } from './breweryform4.component';

describe('Breweryform4Component', () => {
  let component: Breweryform4Component;
  let fixture: ComponentFixture<Breweryform4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breweryform4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breweryform4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
