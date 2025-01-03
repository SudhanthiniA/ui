import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddintimationbookComponent } from './addintimationbook.component';

describe('AddintimationbookComponent', () => {
  let component: AddintimationbookComponent;
  let fixture: ComponentFixture<AddintimationbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddintimationbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddintimationbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
