import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimportpermitstatusComponent } from './addimportpermitstatus.component';

describe('AddimportpermitstatusComponent', () => {
  let component: AddimportpermitstatusComponent;
  let fixture: ComponentFixture<AddimportpermitstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimportpermitstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimportpermitstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
