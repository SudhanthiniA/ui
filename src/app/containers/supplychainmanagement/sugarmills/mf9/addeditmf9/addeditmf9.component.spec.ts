import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addeditmf9Component } from './addeditmf9.component';

describe('Addeditmf9Component', () => {
  let component: Addeditmf9Component;
  let fixture: ComponentFixture<Addeditmf9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addeditmf9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addeditmf9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
