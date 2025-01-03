import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditimportpermitComponent } from './editimportpermit.component';

describe('EditimportpermitComponent', () => {
  let component: EditimportpermitComponent;
  let fixture: ComponentFixture<EditimportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditimportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditimportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
