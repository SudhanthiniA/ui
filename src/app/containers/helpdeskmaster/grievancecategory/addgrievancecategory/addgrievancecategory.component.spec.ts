import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgrievancecategoryComponent } from './addgrievancecategory.component';

describe('AddgrievancecategoryComponent', () => {
  let component: AddgrievancecategoryComponent;
  let fixture: ComponentFixture<AddgrievancecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgrievancecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgrievancecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
