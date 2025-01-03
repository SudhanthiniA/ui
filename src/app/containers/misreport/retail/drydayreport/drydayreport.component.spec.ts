import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrydayreportComponent } from './drydayreport.component';

describe('DrydayreportComponent', () => {
  let component: DrydayreportComponent;
  let fixture: ComponentFixture<DrydayreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrydayreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrydayreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
