import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccessoriesnameComponent } from './accessoriesname.component';

describe('AddaccessoriesnameComponent', () => {
  let component: AddaccessoriesnameComponent;
  let fixture: ComponentFixture<AddaccessoriesnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccessoriesnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccessoriesnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
