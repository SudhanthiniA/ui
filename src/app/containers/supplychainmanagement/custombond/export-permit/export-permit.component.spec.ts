import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPermitComponent } from './export-permit.component';

describe('ExportPermitComponent', () => {
  let component: ExportPermitComponent;
  let fixture: ComponentFixture<ExportPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
