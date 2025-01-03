import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddomdregistrationComponent } from './addomdregistration.component';

describe('AddomdregistrationComponent', () => {
  let component: AddomdregistrationComponent;
  let fixture: ComponentFixture<AddomdregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddomdregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddomdregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
