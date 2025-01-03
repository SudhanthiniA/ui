import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImportpermitComponent } from './add-importpermit.component';

describe('AddImportpermitComponent', () => {
  let component: AddImportpermitComponent;
  let fixture: ComponentFixture<AddImportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
