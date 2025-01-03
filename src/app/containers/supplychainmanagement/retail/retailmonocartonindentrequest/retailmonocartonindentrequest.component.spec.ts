import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailmonocartonindentrequestComponent } from './retailmonocartonindentrequest.component';

describe('RetailmonocartonindentrequestComponent', () => {
  let component: RetailmonocartonindentrequestComponent;
  let fixture: ComponentFixture<RetailmonocartonindentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailmonocartonindentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailmonocartonindentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
