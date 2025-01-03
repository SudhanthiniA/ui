import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExportPermitComponent } from './add-export-permit.component';

describe('AddExportPermitComponent', () => {
  let component: AddExportPermitComponent;
  let fixture: ComponentFixture<AddExportPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExportPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExportPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
