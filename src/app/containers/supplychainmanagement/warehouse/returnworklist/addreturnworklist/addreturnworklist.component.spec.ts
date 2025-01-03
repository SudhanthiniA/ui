import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreturnworklistComponent } from './addreturnworklist.component';

describe('AddreturnworklistComponent', () => {
  let component: AddreturnworklistComponent;
  let fixture: ComponentFixture<AddreturnworklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreturnworklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreturnworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
