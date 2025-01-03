import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExportPermitRequestComponent } from './add-export-permit-request.component';

describe('AddExportPermitRequestComponent', () => {
  let component: AddExportPermitRequestComponent;
  let fixture: ComponentFixture<AddExportPermitRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExportPermitRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExportPermitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
