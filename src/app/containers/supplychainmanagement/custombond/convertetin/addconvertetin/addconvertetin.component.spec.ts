import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconvertetinComponent } from './addconvertetin.component';

describe('AddconvertetinComponent', () => {
  let component: AddconvertetinComponent;
  let fixture: ComponentFixture<AddconvertetinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconvertetinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconvertetinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
