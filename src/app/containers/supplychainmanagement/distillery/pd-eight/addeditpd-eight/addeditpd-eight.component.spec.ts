import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditpdEightComponent } from './addeditpd-eight.component';

describe('AddeditpdEightComponent', () => {
  let component: AddeditpdEightComponent;
  let fixture: ComponentFixture<AddeditpdEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditpdEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditpdEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
