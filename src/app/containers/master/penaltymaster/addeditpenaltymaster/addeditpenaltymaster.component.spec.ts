import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditpenaltymasterComponent } from './addeditpenaltymaster.component';

describe('AddeditpenaltymasterComponent', () => {
  let component: AddeditpenaltymasterComponent;
  let fixture: ComponentFixture<AddeditpenaltymasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditpenaltymasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditpenaltymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
