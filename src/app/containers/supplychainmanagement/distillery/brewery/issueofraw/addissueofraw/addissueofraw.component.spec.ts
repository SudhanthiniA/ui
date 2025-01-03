import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddissueofrawComponent } from './addissueofraw.component';

describe('AddissueofrawComponent', () => {
  let component: AddissueofrawComponent;
  let fixture: ComponentFixture<AddissueofrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddissueofrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddissueofrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
