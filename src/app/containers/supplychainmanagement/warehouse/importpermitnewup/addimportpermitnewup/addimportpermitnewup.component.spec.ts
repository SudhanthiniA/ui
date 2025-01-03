import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimportpermitnewupComponent } from './addimportpermitnewup.component';

describe('AddimportpermitnewupComponent', () => {
  let component: AddimportpermitnewupComponent;
  let fixture: ComponentFixture<AddimportpermitnewupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimportpermitnewupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimportpermitnewupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
