import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportapplicationComponent } from './exportapplication.component';

describe('ExportapplicationComponent', () => {
  let component: ExportapplicationComponent;
  let fixture: ComponentFixture<ExportapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
