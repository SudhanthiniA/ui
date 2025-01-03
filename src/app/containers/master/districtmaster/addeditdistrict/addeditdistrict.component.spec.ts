import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdistrictComponent } from './addeditdistrict.component';

describe('AddeditdistrictComponent', () => {
  let component: AddeditdistrictComponent;
  let fixture: ComponentFixture<AddeditdistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
