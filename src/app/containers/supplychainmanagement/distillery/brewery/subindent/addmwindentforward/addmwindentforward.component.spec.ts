import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmwindentforwardComponent } from './addmwindentforward.component';

describe('AddmwindentforwardComponent', () => {
  let component: AddmwindentforwardComponent;
  let fixture: ComponentFixture<AddmwindentforwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmwindentforwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmwindentforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
