import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadministrationchargesComponent } from './addadministrationcharges.component';

describe('AddadministrationchargesComponent', () => {
  let component: AddadministrationchargesComponent;
  let fixture: ComponentFixture<AddadministrationchargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadministrationchargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadministrationchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
