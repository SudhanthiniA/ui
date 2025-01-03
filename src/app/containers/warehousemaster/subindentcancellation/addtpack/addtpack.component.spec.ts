import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtpackComponent } from './addtpack.component';

describe('AddtpackComponent', () => {
  let component: AddtpackComponent;
  let fixture: ComponentFixture<AddtpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
