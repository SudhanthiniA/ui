import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddispatchedComponent } from './adddispatched.component';

describe('AdddispatchedComponent', () => {
  let component: AdddispatchedComponent;
  let fixture: ComponentFixture<AdddispatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddispatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddispatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
