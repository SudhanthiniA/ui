import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditliquorComponent } from './addeditliquor.component';

describe('AddeditliquorComponent', () => {
  let component: AddeditliquorComponent;
  let fixture: ComponentFixture<AddeditliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
