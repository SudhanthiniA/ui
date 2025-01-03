import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtranspassgenerationComponent } from './addtranspassgeneration.component';

describe('AddtranspassgenerationComponent', () => {
  let component: AddtranspassgenerationComponent;
  let fixture: ComponentFixture<AddtranspassgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtranspassgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtranspassgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
