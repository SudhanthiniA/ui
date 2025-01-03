import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditapplicationstatusComponent } from './addeditapplicationstatus.component';

describe('AddeditapplicationstatusComponent', () => {
  let component: AddeditapplicationstatusComponent;
  let fixture: ComponentFixture<AddeditapplicationstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditapplicationstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditapplicationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
