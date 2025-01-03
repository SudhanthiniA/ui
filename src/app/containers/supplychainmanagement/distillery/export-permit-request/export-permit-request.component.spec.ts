import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPermitRequestComponent } from './export-permit-request.component';

describe('ExportPermitRequestComponent', () => {
  let component: ExportPermitRequestComponent;
  let fixture: ComponentFixture<ExportPermitRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPermitRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPermitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
