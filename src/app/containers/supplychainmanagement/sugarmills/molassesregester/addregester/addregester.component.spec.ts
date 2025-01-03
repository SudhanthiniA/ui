import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregesterComponent } from './addregester.component';

describe('AddregesterComponent', () => {
  let component: AddregesterComponent;
  let fixture: ComponentFixture<AddregesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
