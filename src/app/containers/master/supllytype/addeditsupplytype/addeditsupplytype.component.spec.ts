import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditsupplytypeComponent } from './addeditsupplytype.component';

describe('AddeditsupplytypeComponent', () => {
  let component: AddeditsupplytypeComponent;
  let fixture: ComponentFixture<AddeditsupplytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditsupplytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditsupplytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
