import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditimportrequestComponent } from './addeditimportrequest.component';

describe('AddeditimportrequestComponent', () => {
  let component: AddeditimportrequestComponent;
  let fixture: ComponentFixture<AddeditimportrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditimportrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditimportrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
