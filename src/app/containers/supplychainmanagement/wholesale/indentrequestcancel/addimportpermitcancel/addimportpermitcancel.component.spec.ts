import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimportpermitcancelComponent } from './addimportpermitcancel.component';

describe('AddimportpermitcancelComponent', () => {
  let component: AddimportpermitcancelComponent;
  let fixture: ComponentFixture<AddimportpermitcancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimportpermitcancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimportpermitcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
