import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionandredressalComponent } from './inspectionandredressal.component';

describe('InspectionandredressalComponent', () => {
  let component: InspectionandredressalComponent;
  let fixture: ComponentFixture<InspectionandredressalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionandredressalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionandredressalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
