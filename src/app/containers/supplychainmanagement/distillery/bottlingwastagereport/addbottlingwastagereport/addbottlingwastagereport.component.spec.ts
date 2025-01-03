import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingwastagereportComponent } from './addbottlingwastagereport.component';

describe('AddbottlingwastagereportComponent', () => {
  let component: AddbottlingwastagereportComponent;
  let fixture: ComponentFixture<AddbottlingwastagereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingwastagereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingwastagereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
