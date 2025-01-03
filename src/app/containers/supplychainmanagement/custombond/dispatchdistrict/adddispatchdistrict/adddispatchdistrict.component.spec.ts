import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddispatchdistrictComponent } from './adddispatchdistrict.component';

describe('AdddispatchdistrictComponent', () => {
  let component: AdddispatchdistrictComponent;
  let fixture: ComponentFixture<AdddispatchdistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddispatchdistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddispatchdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
