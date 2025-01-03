import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExportPermitComponent } from './view-export-permit.component';

describe('ViewExportPermitComponent', () => {
  let component: ViewExportPermitComponent;
  let fixture: ComponentFixture<ViewExportPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExportPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExportPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
