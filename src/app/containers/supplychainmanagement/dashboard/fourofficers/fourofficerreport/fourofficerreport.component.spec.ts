import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourofficerreportComponent } from './fourofficerreport.component';

describe('FourofficerreportComponent', () => {
  let component: FourofficerreportComponent;
  let fixture: ComponentFixture<FourofficerreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourofficerreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourofficerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
