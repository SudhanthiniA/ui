import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExportPermitRequestComponent } from './view-export-permit-request.component';

describe('ViewExportPermitRequestComponent', () => {
  let component: ViewExportPermitRequestComponent;
  let fixture: ComponentFixture<ViewExportPermitRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExportPermitRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExportPermitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
