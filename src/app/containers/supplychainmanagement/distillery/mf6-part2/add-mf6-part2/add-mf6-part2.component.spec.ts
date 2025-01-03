import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMf6Part2Component } from './add-mf6-part2.component';

describe('AddMf6Part2Component', () => {
  let component: AddMf6Part2Component;
  let fixture: ComponentFixture<AddMf6Part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMf6Part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMf6Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
