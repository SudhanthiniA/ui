import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimportpermitComponent } from './addimportpermit.component';

describe('AddimportpermitComponent', () => {
  let component: AddimportpermitComponent;
  let fixture: ComponentFixture<AddimportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
