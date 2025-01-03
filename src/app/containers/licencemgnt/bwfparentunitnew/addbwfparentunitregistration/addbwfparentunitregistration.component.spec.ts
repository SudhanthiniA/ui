import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbwfparentunitregistrationComponent } from './addbwfparentunitregistration.component';

describe('AddbwfparentunitregistrationComponent', () => {
  let component: AddbwfparentunitregistrationComponent;
  let fixture: ComponentFixture<AddbwfparentunitregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbwfparentunitregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbwfparentunitregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
