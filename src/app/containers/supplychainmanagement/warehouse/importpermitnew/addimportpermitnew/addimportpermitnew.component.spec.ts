import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimportpermitnewComponent } from './addimportpermitnew.component';

describe('AddimportpermitnewComponent', () => {
  let component: AddimportpermitnewComponent;
  let fixture: ComponentFixture<AddimportpermitnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimportpermitnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimportpermitnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
