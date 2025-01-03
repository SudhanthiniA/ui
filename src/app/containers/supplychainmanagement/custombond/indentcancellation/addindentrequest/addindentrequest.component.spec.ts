import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddindentrequestComponent } from './addindentrequest.component';

describe('AddindentrequestComponent', () => {
  let component: AddindentrequestComponent;
  let fixture: ComponentFixture<AddindentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddindentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddindentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
