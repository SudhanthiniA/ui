import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingwastagereportComponent } from './viewbottlingwastagereport.component';

describe('ViewbottlingwastagereportComponent', () => {
  let component: ViewbottlingwastagereportComponent;
  let fixture: ComponentFixture<ViewbottlingwastagereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingwastagereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingwastagereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
