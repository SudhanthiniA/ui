import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassesdispatchreportComponent } from './molassesdispatchreport.component';

describe('MolassesdispatchreportComponent', () => {
  let component: MolassesdispatchreportComponent;
  let fixture: ComponentFixture<MolassesdispatchreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassesdispatchreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassesdispatchreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
