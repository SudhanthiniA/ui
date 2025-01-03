import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbondregistrationComponent } from './addbondregistration.component';

describe('AddbondregistrationComponent', () => {
  let component: AddbondregistrationComponent;
  let fixture: ComponentFixture<AddbondregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbondregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbondregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
