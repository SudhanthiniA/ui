import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtranspassgenerationnewComponent } from './addtranspassgenerationnew.component';

describe('AddtranspassgenerationnewComponent', () => {
  let component: AddtranspassgenerationnewComponent;
  let fixture: ComponentFixture<AddtranspassgenerationnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtranspassgenerationnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtranspassgenerationnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
