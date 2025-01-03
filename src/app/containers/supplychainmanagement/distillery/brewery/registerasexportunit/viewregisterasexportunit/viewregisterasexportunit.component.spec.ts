import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregisterasexportunitComponent } from './viewregisterasexportunit.component';

describe('ViewregisterasexportunitComponent', () => {
  let component: ViewregisterasexportunitComponent;
  let fixture: ComponentFixture<ViewregisterasexportunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewregisterasexportunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewregisterasexportunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
