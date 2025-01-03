import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPd22Component } from './add-pd22.component';

describe('AddPd22Component', () => {
  let component: AddPd22Component;
  let fixture: ComponentFixture<AddPd22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPd22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPd22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
