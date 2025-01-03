import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddindentrequestcancellationComponent } from './addindentrequestcancellation.component';

describe('AddindentrequestcancellationComponent', () => {
  let component: AddindentrequestcancellationComponent;
  let fixture: ComponentFixture<AddindentrequestcancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddindentrequestcancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddindentrequestcancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
