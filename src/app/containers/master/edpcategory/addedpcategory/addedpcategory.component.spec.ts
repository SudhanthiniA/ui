import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedpcategoryComponent } from './addedpcategory.component';

describe('AddedpcategoryComponent', () => {
  let component: AddedpcategoryComponent;
  let fixture: ComponentFixture<AddedpcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedpcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedpcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
