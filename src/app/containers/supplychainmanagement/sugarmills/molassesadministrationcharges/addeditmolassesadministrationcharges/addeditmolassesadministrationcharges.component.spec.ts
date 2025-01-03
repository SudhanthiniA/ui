import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditmolassesadministrationchargesComponent } from './addeditmolassesadministrationcharges.component';

describe('AddeditmolassesadministrationchargesComponent', () => {
  let component: AddeditmolassesadministrationchargesComponent;
  let fixture: ComponentFixture<AddeditmolassesadministrationchargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditmolassesadministrationchargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditmolassesadministrationchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
