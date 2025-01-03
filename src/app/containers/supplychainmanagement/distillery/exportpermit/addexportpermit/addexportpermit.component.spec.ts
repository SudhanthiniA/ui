import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexportpermitComponent } from './addexportpermit.component';

describe('AddexportpermitComponent', () => {
  let component: AddexportpermitComponent;
  let fixture: ComponentFixture<AddexportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
