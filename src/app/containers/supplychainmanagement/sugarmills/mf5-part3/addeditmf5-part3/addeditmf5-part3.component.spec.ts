import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addeditmf5Part3Component } from './addeditmf5-part3.component';

describe('Addeditmf5Part3Component', () => {
  let component: Addeditmf5Part3Component;
  let fixture: ComponentFixture<Addeditmf5Part3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addeditmf5Part3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addeditmf5Part3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
