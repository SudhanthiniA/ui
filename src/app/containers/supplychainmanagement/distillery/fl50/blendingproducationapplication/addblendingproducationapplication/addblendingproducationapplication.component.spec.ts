import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblendingproducationapplicationComponent } from './addblendingproducationapplication.component';

describe('AddblendingproducationapplicationComponent', () => {
  let component: AddblendingproducationapplicationComponent;
  let fixture: ComponentFixture<AddblendingproducationapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddblendingproducationapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddblendingproducationapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
